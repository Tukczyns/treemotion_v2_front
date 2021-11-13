import { MdLocationCity } from 'react-icons/md'
import { TiGroupOutline } from 'react-icons/ti'
import { FaRunning } from 'react-icons/fa'

export enum ERanking {
    CITY = "CITY",
    USER = "USER",
    GROUP = "GROUP",
}

interface IProps {
    type: ERanking;
    place: number;
    title: string;
    total: string;
    users?: number;
    highlight: boolean;
}

const switchIcon = (icon: ERanking) => {
    switch (icon) {
        case ERanking.CITY:
            return <MdLocationCity />
        case ERanking.USER:
            return <FaRunning />
        case ERanking.GROUP:
            return <TiGroupOutline />
        default:
            return <MdLocationCity />
    }
}

const RankingTile: React.FC<IProps> = ({ place, title, total, users, highlight, type }) => {
    return (
        <div className={`bg-gray-900 rounded-lg overflow-hidden p-4 text-white font-semibold ${highlight && 'border border-yellow-300'}`}>
            <div className="grid grid-cols-3 gap-4">
                <div className="text-7xl text-gray-400 font-bold flex items-center justify-center">
                    {place}
                </div>
                <div className="col-span-2">
                    <div className="text-4xl text-gray-400">
                        {switchIcon(type)}
                    </div>
                    <p className="text-xl my-2">{title}</p>
                    <p className="text-lg text-gray-300 my-2">{total}</p>
                    {type !== ERanking.USER && <p className="text-xs text-gray-500">{users} użytkowników</p>}
                </div>
            </div>
        </div>
    )
}

export default RankingTile
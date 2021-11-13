import ResultTile, { ETile } from "../result_tile/result_tile"
import PanelSectionName from "../utils/panel_section_name/panel_section_name"

const Summary: React.FC = () => {
    return (
        <div className="w-full h-full p-6">
            <div className="flex flex-col justify-center items-start h-full">
                <PanelSectionName text="Twoje wyniki w tym miesiącu" />
                <div className="grid grid-cols-2 gap-3 mt-3">
                    <ResultTile type={ETile.DISTANCE} title="Całkowita odległość" value="321km" small />
                    <ResultTile type={ETile.TIME} title="Całkowity czas" value="3h 25min" small />
                    <ResultTile type={ETile.AVG_SPEED} title="Średnia prędkość" value="5.23km/h" small />
                    <ResultTile type={ETile.KCAL} title="Spalone kalorie" value="3211" small />
                </div>
            </div>
        </div>
    )
}

export default Summary
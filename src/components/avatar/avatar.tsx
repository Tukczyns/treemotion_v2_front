interface IProps {
  url: string;
  small?: boolean;
}

const Avatar: React.FC<IProps> = ({ url, small = false }) => {
  return (
    <div className={`${small ? 'w-12 h-12' : 'w-16 h-16'} bg-gray-800 rounded-md overflow-hidden`}>
      <img
        src="https://i.pinimg.com/originals/15/2c/86/152c86196f4b6e5e4a6b501fa542f2a5.png"
        alt="profile pic"
        className="object-cover h-full w-full"
      />
    </div>
  );
};

export default Avatar;

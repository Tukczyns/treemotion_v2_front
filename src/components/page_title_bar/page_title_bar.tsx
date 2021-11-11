interface IProps {
  title: string;
}

const PageTitleBar: React.FC<IProps> = ({ title }) => {
  return (
    <div className="w-full flex justify-between items-center text-white">
      <p className="text-xl font-semibold">{title}</p>
      <p className="font-thin text-sm">
        Dziś jest <span className="font-bold">6 listopada 2021r.</span>
      </p>
    </div>
  );
};

export default PageTitleBar;

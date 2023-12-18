import { RxCross1 } from "react-icons/rx";
const Profile = ({ onprofile }) => {
  return (
    <div className="flex justify-start">
      <div className="flex items-center justify-center mt-10 w-full">
        <div>
          <img src="/profile.png" className="h-[200px] w-[250px]" alt="" />
        </div>
        <div className="absolute right-10 top-10">
          <RxCross1 className="text-3xl cursor-pointer" onClick={onprofile} />
        </div>
      </div>
    </div>
  );
};

export default Profile;

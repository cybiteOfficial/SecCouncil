import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formattedDate } from "../../../utils/dateFormatter";
import IconBtn from "../../common/IconBtn";
import ProgressBar from "../../common/progressbar.jsx";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();
  const courses = user?.courses ?? [];

  return (
    <>
      <h1 className="mb-14 text-3xl font-medium bg-gradient-to-b from-[#004aad] via-[#32a7f3] to-[#6ca3cc] text-transparent bg-clip-text font-bold">
        My Profile
      </h1>
{/* Enrolled Courses Section */}
{/* <div className="my-10 flex flex-col gap-y-6 sm:gap-y-10 rounded-md border-[1px] border-black bg-mwhite p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-black">Enrolled Courses</h2>
        {courses.length > 0 ? (
          courses.map((course) => (
            <div
              key={course.id}
              className="my-4 p-4 border-[1px] border-black rounded-md"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-black">{course.name}</h3>
                  <p className="text-sm text-black">Instructor: {course.instructor}</p>
                </div>
                <div className="w-full sm:w-[200px] mt-2 sm:mt-0">
                  <ProgressBar progress={course.progress} />
                  <p className="text-sm text-black">{course.progress}% Completed</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-black">You are not enrolled in any courses.</p>
        )}
      </div> */}
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-y-4 rounded-md border-[1px] border-black bg-mwhite p-6 sm:p-8">
        <div className="flex items-center gap-x-4">
          <img
            src={user?.image}
            alt={`profile-${user?.firstName}`}
            className="aspect-square w-[78px] rounded-full object-cover"
          />
          <div className="space-y-1">
            <p className="text-lg font-semibold text-black">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-sm text-black">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings");
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col gap-y-6 sm:gap-y-10 rounded-md border-[1px] border-black bg-mwhite p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-black">About</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <p
          className={`${
            user?.additionalDetails?.about
              ? "text-black"
              : "text-black"
          } text-sm font-medium`}
        >
          {user?.additionalDetails?.about ?? "Write Something About Yourself"}
        </p>
      </div>

      {/* Personal Details Section */}
      <div className="my-10 flex flex-col gap-y-6 sm:gap-y-10 rounded-md border-[1px] border-black bg-mwhite p-6 sm:p-8">
        <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-black">Personal Details</p>
          <IconBtn
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings");
            }}
          >
            <RiEditBoxLine />
          </IconBtn>
        </div>
        <div className="flex flex-col sm:flex-row max-w-full sm:max-w-[500px] justify-between gap-y-6 sm:gap-y-0">
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-black">First Name</p>
              <p className="text-sm font-medium text-black">
                {user?.firstName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-black">Email</p>
              <p className="text-sm font-medium text-black">
                {user?.email}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-black">Gender</p>
              <p className="text-sm font-medium text-black">
                {user?.additionalDetails?.gender ?? "Add Gender"}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <p className="mb-2 text-sm text-black">Last Name</p>
              <p className="text-sm font-medium text-black">
                {user?.lastName}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-black">Phone Number</p>
              <p className="text-sm font-medium text-black">
                {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
              </p>
            </div>
            <div>
              <p className="mb-2 text-sm text-black">Date Of Birth</p>
              <p className="text-sm font-medium text-black">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ?? "Add Date Of Birth"}
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

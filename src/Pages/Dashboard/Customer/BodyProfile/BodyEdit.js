import { useNavigate } from "react-router-dom";

import Card from "../../../../Components/UI/Card";


const BodyEdit = () => {
const navigate = useNavigate()
    const submitHander = (e)=> {
        e.preventDefault()

        navigate('/profile/body-profile')

    }
  return (
    <Card pageTitle="Edit Measurements" className="min-h-[80vh]">
      <form className=" px-6 py-10 relative h-full" onSubmit={submitHander}>
        <h2 className='text-center font-semibold mb-6'>Upper Body</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-6 mb-6">
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Bust:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Shoulder Length:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Front Waist Length:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Back Waist Length:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Arm Length:
            </label>
          </div>
        </div>
        <h2 className='text-center font-semibold mb-6'>Lower Body</h2>
        <div className="grid grid-cols-4 grid-rows-2 gap-6 mb-24">
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Waist:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Hip:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Hip Dip:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Thigh:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Ankle:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Inseam:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Outseam:
            </label>
          </div>
          <div class="relative z-0 mb-6">
            <input
              type="number" min='0'
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_standard"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Crotch Depth:
            </label>
          </div>
        </div>
        <button type='submit' className="py-2 z-20 w-full bg-header text-white font-semibold rounded-md active:bg-headerHover">Submit</button>
      </form>
    </Card>
  );
};

export default BodyEdit;

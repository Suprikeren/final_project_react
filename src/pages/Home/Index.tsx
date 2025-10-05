import Nav from "../../components/home/Nav";
import Footer from "../../components/home/Footer";
import PageMeta from "../../components/common/PageMeta";

export default function HomeIndex() {
  return (
    <>
    <PageMeta
        title=" Home"
        description="Home"/>
    <Nav/>
      <section className="">
        <div className="w-full">
         {/* content */}
          <div className="xl:py-28 md:py-20 py-10 xl:px-0 px-10">
            <span className="w-fit mx-auto flex items-center justify-center bg-emerald-50 rounded-full text-emerald-600 text-center text-sm font-medium leading-5 px-3 py-1 mb-5">
              Careers at Pagedone
            </span>
            <h1 className="text-gray-900 text-center font-manrope lg:text-5xl text-4xl font-bold leading-tight mb-8">
              Unlock new career <br /> opportunities at Pagedone{" "}
            </h1>
            <p className="text-gray-900 text-center text-lg font-normal leading-7">
              Pagedone embraces a youthful and flexible spirit, enabling us to
              swiftly adapt to market research, <br /> conditions, and customer
              demands through our advanced technology.{" "}
            </p>
          </div>
          {/* content */}
          <div className="lg:py-24 md:py-16 py-10 bg-slate-50 xl:px-0 px-10">
            <h2 className="text-gray-900 text-center font-manrope lg:text-4xl text-3xl font-bold leading-10 mb-14">
              Open positions
            </h2>
            <div className="lg:max-w-3xl md:max-w-xl sm:max-w-md max-w-sm mx-auto border border-slate-200 bg-white rounded-2xl p-12">
              <div className="flex justify-between gap-x-8 pb-6 border-b border-gray-200">
                <h3 className="text-gray-900 text-xl font-medium leading-8">
                  UX Designer
                </h3>
                <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                  Apply
                </button>
              </div>
              <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
                <h3 className="text-indigo-600 text-xl font-medium leading-8">
                  Motion Designer
                </h3>
                <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                  Apply
                </button>
              </div>
              <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
                <h3 className="text-gray-900 text-xl font-medium leading-8">
                  iOS Developer
                </h3>
                <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                  Apply
                </button>
              </div>
              <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
                <h3 className="text-gray-900 text-xl font-medium leading-8">
                  Product Designer
                </h3>
                <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                  Apply
                </button>
              </div>
              <div className="flex justify-between gap-x-8 py-6 border-b border-gray-200">
                <h3 className="text-gray-900 text-xl font-medium leading-8">
                  UX Researcher
                </h3>
                <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                  Apply
                </button>
              </div>
              <div className="flex justify-between gap-x-8 pt-6">
                <h3 className="text-gray-900 text-xl font-medium leading-8">
                  Project Manager
                </h3>
                <button className="w-20 h-9 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-all duration-700 text-indigo-600 text-xs font-semibold leading-4">
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="xl:max-w-6xl w-auto mx-auto xl:py-28 md:py-16 py-10 xl:px-0 px-10">
            <h3 className="text-gray-900 text-center lg:text-4xl text-3xl font-bold leading-10 mb-5">
              Pagedone thrives on a spirit of agility
            </h3>
            <p className="text-gray-500 text-center text-lg font-normal leading-7 lg:mb-14 mb-6">
              We want to provide a user friendly experience with the eyes
              capture design and develop product <br /> quickly with the ability
              to solve user problems.{" "}
            </p>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 lg:gap-x-8 gap-y-4 lg:pb-24 pb-10 border-b border-gray-200 max-w-lg mx-auto md:max-w-3xl lg:max-w-full">
              <div className="p-8 group  hover:rounded-2xl transition-all duration-500 hover:shadow-md cursor-pointer">
                <div className="w-20 h-20 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500 group-hover:bg-indigo-600">
                  <svg
                    className="fill-indigo-600 transition-all duration-500 group-hover:fill-indigo-50"
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.05949 7.25095L5.55925 6.38506H5.55925L6.05949 7.25095ZM6.05949 22.7491L6.55974 21.8832H6.55974L6.05949 22.7491ZM17.0288 26.6051L17.5193 27.4766L17.0288 26.6051ZM12.6912 26.5804L12.191 27.4463L12.6912 26.5804ZM23.8971 22.7392L23.4066 21.8677L23.8971 22.7392ZM23.8971 7.26084L24.3876 6.3894L23.8971 7.26084ZM17.0288 3.39488L17.5193 2.52344V2.52344L17.0288 3.39488ZM12.6912 3.41961L13.1915 4.28549L12.6912 3.41961ZM15.1783 13.7164L15.0316 14.7056C15.0919 14.7145 15.1528 14.718 15.2137 14.7158L15.1783 13.7164ZM14.9726 13.7164L14.9372 14.7158C14.992 14.7177 15.0469 14.7152 15.1013 14.7081L14.9726 13.7164ZM17.8876 10.8054L18.8876 10.8108V10.8054H17.8876ZM8.38077 20.6183C8.3244 21.1677 8.72407 21.6588 9.27347 21.7152C9.82287 21.7715 10.3139 21.3719 10.3703 20.8225L8.38077 20.6183ZM10.8527 18.4882L10.2855 17.6646L10.2805 17.6681L10.8527 18.4882ZM19.1479 18.4882L19.72 17.6681L19.7179 17.6666L19.1479 18.4882ZM19.6302 20.8225C19.6866 21.3719 20.1777 21.7715 20.7271 21.7152C21.2765 21.6588 21.6762 21.1677 21.6198 20.6183L19.6302 20.8225ZM16.5383 4.26631L23.4066 8.13228L24.3876 6.3894L17.5193 2.52344L16.5383 4.26631ZM25.25 11.3608V18.6392H27.25V11.3608H25.25ZM23.4066 21.8677L16.5383 25.7337L17.5193 27.4766L24.3876 23.6106L23.4066 21.8677ZM13.1915 25.7145L6.55974 21.8832L5.55924 23.6149L12.191 27.4463L13.1915 25.7145ZM4.75 18.6738V11.3262H2.75V18.6738H4.75ZM6.55974 8.11683L13.1915 4.28549L12.191 2.55373L5.55925 6.38506L6.55974 8.11683ZM4.75 11.3262C4.75 10.6388 4.75107 10.1935 4.78415 9.84987C4.81525 9.52689 4.86887 9.37507 4.93005 9.2671L3.19004 8.28102C2.94118 8.72015 2.83978 9.17607 2.79336 9.65821C2.74893 10.1197 2.75 10.6769 2.75 11.3262H4.75ZM5.55925 6.38506C5.01336 6.70044 4.53949 6.97284 4.16868 7.24032C3.77866 7.52165 3.43999 7.83996 3.19004 8.28102L4.93005 9.2671C4.99015 9.16106 5.08807 9.04315 5.3387 8.86237C5.60854 8.66773 5.97936 8.45213 6.55974 8.11683L5.55925 6.38506ZM6.55974 21.8832C5.97936 21.5479 5.60853 21.3323 5.3387 21.1376C5.08807 20.9568 4.99015 20.8389 4.93005 20.7329L3.19004 21.719C3.43999 22.16 3.77866 22.4784 4.16868 22.7597C4.53949 23.0272 5.01336 23.2996 5.55924 23.6149L6.55974 21.8832ZM2.75 18.6738C2.75 19.3231 2.74893 19.8803 2.79336 20.3418C2.83978 20.8239 2.94118 21.2798 3.19004 21.719L4.93005 20.7329C4.86887 20.6249 4.81525 20.4731 4.78415 20.1501C4.75107 19.8065 4.75 19.3612 4.75 18.6738H2.75ZM16.5383 25.7337C15.9897 26.0425 15.6395 26.2383 15.356 26.3635C15.0921 26.48 14.9594 26.5006 14.8609 26.5L14.8495 28.5C15.329 28.5027 15.7512 28.3752 16.1637 28.1932C16.5566 28.0197 17.0042 27.7665 17.5193 27.4766L16.5383 25.7337ZM12.191 27.4463C12.703 27.7421 13.1479 28.0004 13.5389 28.1782C13.9493 28.365 14.37 28.4972 14.8495 28.5L14.8609 26.5C14.7624 26.4994 14.6298 26.4773 14.3671 26.3578C14.0849 26.2294 13.7367 26.0295 13.1915 25.7145L12.191 27.4463ZM25.25 18.6392C25.25 19.3348 25.2489 19.7856 25.2151 20.1333C25.1834 20.4602 25.1287 20.6133 25.0663 20.7219L26.801 21.7174C27.055 21.2748 27.1584 20.8141 27.2058 20.3267C27.2511 19.8601 27.25 19.2964 27.25 18.6392H25.25ZM24.3876 23.6106C24.9435 23.2977 25.4259 23.0276 25.8035 22.761C26.2006 22.4807 26.5459 22.162 26.801 21.7174L25.0663 20.7219C25.0051 20.8286 24.9055 20.9469 24.6501 21.1271C24.3752 21.3211 23.9976 21.5351 23.4066 21.8677L24.3876 23.6106ZM23.4066 8.13228C23.9976 8.4649 24.3752 8.67887 24.6501 8.8729C24.9055 9.05313 25.0051 9.1714 25.0663 9.27807L26.801 8.2826C26.5459 7.83802 26.2006 7.51928 25.8035 7.23895C25.4259 6.97242 24.9435 6.70228 24.3876 6.3894L23.4066 8.13228ZM27.25 11.3608C27.25 10.7036 27.2511 10.1399 27.2058 9.67332C27.1584 9.18592 27.055 8.7252 26.801 8.2826L25.0663 9.27807C25.1287 9.38672 25.1834 9.53983 25.2151 9.86667C25.2489 10.2144 25.25 10.6652 25.25 11.3608H27.25ZM17.5193 2.52344C17.0042 2.23348 16.5566 1.98026 16.1637 1.80684C15.7512 1.62477 15.329 1.49731 14.8495 1.50004L14.8609 3.50001C14.9594 3.49945 15.0921 3.52003 15.356 3.63652C15.6395 3.76165 15.9897 3.95751 16.5383 4.26631L17.5193 2.52344ZM13.1915 4.28549C13.7367 3.97046 14.0849 3.7706 14.3671 3.64221C14.6298 3.52268 14.7624 3.50057 14.8609 3.50001L14.8495 1.50004C14.37 1.50278 13.9493 1.63503 13.5389 1.82175C13.1479 1.99962 12.703 2.2579 12.191 2.55373L13.1915 4.28549ZM15.3251 12.7272C15.1621 12.7031 14.9914 12.7056 14.8439 12.7247L15.1013 14.7081C15.0901 14.7096 15.0834 14.7097 15.0787 14.7097C15.0757 14.7097 15.0709 14.7097 15.0642 14.7092C15.0578 14.7088 15.0467 14.7078 15.0316 14.7056L15.3251 12.7272ZM15.0079 12.717C14.0688 12.6838 13.2633 11.8748 13.2633 10.8054H11.2633C11.2633 12.8873 12.8583 14.6422 14.9372 14.7158L15.0079 12.717ZM13.2633 10.8054C13.2633 9.70856 14.1044 8.88543 15.0755 8.88543V6.88543C12.9257 6.88543 11.2633 8.67958 11.2633 10.8054H13.2633ZM15.0755 8.88543C16.0399 8.88543 16.8876 9.71058 16.8876 10.8054H18.8876C18.8876 8.67756 17.2147 6.88543 15.0755 6.88543V8.88543ZM16.8877 10.7999C16.8818 11.8786 16.0774 12.684 15.143 12.717L15.2137 14.7158C17.2973 14.642 18.8764 12.8835 18.8876 10.8108L16.8877 10.7999ZM10.3703 20.8225C10.4175 20.3632 10.7116 19.8059 11.4248 19.3084L10.2805 17.6681C9.20785 18.4164 8.50055 19.4511 8.38077 20.6183L10.3703 20.8225ZM11.4198 19.3118C12.3633 18.6621 13.6607 18.3072 15.0065 18.3072C16.3527 18.3072 17.6443 18.6622 18.5779 19.3099L19.7179 17.6666C18.3816 16.7395 16.6688 16.3072 15.0065 16.3072C13.3439 16.3072 11.6287 16.7397 10.2855 17.6646L11.4198 19.3118ZM18.5757 19.3084C19.289 19.8059 19.5831 20.3632 19.6302 20.8225L21.6198 20.6183C21.5 19.4511 20.7927 18.4164 19.72 17.6681L18.5757 19.3084Z"
                      fill=""
                    />
                  </svg>
                </div>
                <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                  Leadership
                </h4>
                <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                  Build your beautiful agency website with us that converts more
                  visitors than any other website and the ability to interact
                  and rotate products to solve user problems.
                </p>
              </div>
              <div className="p-8 group hover:rounded-2xl transition-all duration-500 hover:shadow-md cursor-pointer">
                <div className="w-20 h-20 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500 group-hover:bg-indigo-600">
                  <svg
                    className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-50"
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 16.5284 2.77429 17.9926 3.27634 19.3463C3.4113 19.7102 3.47878 19.8922 3.49558 20.0461C3.51237 20.2 3.48933 20.3661 3.44327 20.6983L3.01762 23.7676C2.78365 25.4547 2.66667 26.2982 3.16937 26.7423C3.67207 27.1864 4.49475 26.9663 6.1401 26.526L7.74898 26.0956C8.2212 25.9692 8.45731 25.906 8.67831 25.926C8.8993 25.9459 9.15538 26.0669 9.66748 26.3088C11.2849 27.0728 13.0925 27.5 15 27.5Z"
                      stroke=""
                      strokeWidth={2}
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                  Communication
                </h4>
                <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                  Build your beautiful agency website with us that converts more
                  visitors than any other website and the ability to interact
                  and rotate products to solve user problems.
                </p>
              </div>
              <div className="px-8 group pt-8 lg:pb-8 pb-4 transition-all duration-500 hover:rounded-2xl hover:shadow-md cursor-pointer md:col-span-2 lg:col-span-1 md:w-1/2 lg:w-full md:mx-auto">
                <div className="w-20 h-20 bg-indigo-50 rounded-xl flex items-center justify-center mb-5 max-lg:mx-auto transition-all duration-500 group-hover:bg-indigo-600">
                  <svg
                    className="fill-indigo-600 transition-all duration-500 group-hover:fill-indigo-50"
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4518 12.5087L13.0579 11.5896L13.4518 12.5087ZM15.5053 11.6287L15.8993 12.5478L15.5053 11.6287ZM18.788 14.9113L19.7071 15.3052L18.788 14.9113ZM17.9079 16.9649L18.8271 17.3588V17.3588L17.9079 16.9649ZM16.5385 18.3013L16.1671 17.3728H16.1671L16.5385 18.3013ZM14.5828 19.0836L14.2114 18.1551L14.5828 19.0836ZM11.3331 15.8339L10.4046 15.4625V15.4625L11.3331 15.8339ZM12.1154 13.8781L13.0439 14.2495L12.1154 13.8781ZM10.5266 19.8901L9.81949 20.5972L9.8195 20.5972L10.5266 19.8901ZM17.4281 17.843L16.7296 17.1273L16.7296 17.1273L17.4281 17.843ZM19.754 10.6627L19.0468 11.3698L19.754 10.6627ZM12.5737 12.9886L13.2894 13.687L12.5737 12.9886ZM11.7929 13.6238L16.7929 18.6238L18.2071 17.2096L13.2071 12.2096L11.7929 13.6238ZM13.8457 13.4279L15.8993 12.5478L15.1114 10.7095L13.0579 11.5896L13.8457 13.4279ZM17.8689 14.5174L16.9888 16.5709L18.8271 17.3588L19.7071 15.3052L17.8689 14.5174ZM16.1671 17.3728L14.2114 18.1551L14.9542 20.012L16.9099 19.2297L16.1671 17.3728ZM12.2616 16.2053L13.0439 14.2495L11.1869 13.5067L10.4046 15.4625L12.2616 16.2053ZM14.2114 18.1551C13.0223 18.6307 12.2339 18.9434 11.6683 19.0811C11.071 19.2265 11.1249 19.0742 11.2337 19.183L9.8195 20.5972C10.5111 21.2888 11.4353 21.1963 12.1415 21.0243C12.8794 20.8446 13.8277 20.4626 14.9542 20.012L14.2114 18.1551ZM10.4046 15.4625C9.95403 16.589 9.57203 17.5373 9.39235 18.2752C9.22039 18.9813 9.12787 19.9055 9.81949 20.5972L11.2337 19.183C11.3425 19.2918 11.1901 19.3456 11.3356 18.7483C11.4733 18.1828 11.786 17.3943 12.2616 16.2053L10.4046 15.4625ZM16.9888 16.5709C16.8824 16.8192 16.8236 16.9547 16.7726 17.0524C16.7293 17.1355 16.7174 17.1392 16.7296 17.1273L18.1265 18.5586C18.4799 18.2137 18.6579 17.7534 18.8271 17.3588L16.9888 16.5709ZM16.9099 19.2297C17.3086 19.0703 17.7731 18.9035 18.1265 18.5586L16.7296 17.1273C16.7418 17.1154 16.7378 17.1271 16.6538 17.1684C16.5548 17.217 16.4179 17.2725 16.1671 17.3728L16.9099 19.2297ZM15.8993 12.5478C17.1466 12.0132 17.9813 11.6581 18.5804 11.4951C19.2246 11.3198 19.1658 11.4888 19.0468 11.3698L20.4611 9.95561C19.7437 9.23823 18.7773 9.36876 18.0552 9.56528C17.2879 9.7741 16.2975 10.2012 15.1114 10.7095L15.8993 12.5478ZM19.7071 15.3052C20.2155 14.1192 20.6426 13.1288 20.8514 12.3615C21.0479 11.6394 21.1784 10.673 20.4611 9.95561L19.0468 11.3698C18.9279 11.2509 19.0969 11.192 18.9216 11.8363C18.7585 12.4353 18.4035 13.27 17.8689 14.5174L19.7071 15.3052ZM13.0579 11.5896C12.6633 11.7587 12.2029 11.9368 11.858 12.2902L13.2894 13.687C13.2775 13.6992 13.2812 13.6874 13.3642 13.6441C13.462 13.5931 13.5974 13.5343 13.8457 13.4279L13.0579 11.5896ZM13.0439 14.2495C13.1442 13.9987 13.1997 13.8618 13.2482 13.7629C13.2895 13.6788 13.3013 13.6748 13.2894 13.687L11.858 12.2902C11.5131 12.6436 11.3464 13.1081 11.1869 13.5067L13.0439 14.2495ZM26.5 15C26.5 21.3513 21.3513 26.5 15 26.5V28.5C22.4558 28.5 28.5 22.4558 28.5 15H26.5ZM15 26.5C8.64873 26.5 3.5 21.3513 3.5 15H1.5C1.5 22.4558 7.54416 28.5 15 28.5V26.5ZM3.5 15C3.5 8.64873 8.64873 3.5 15 3.5V1.5C7.54416 1.5 1.5 7.54416 1.5 15H3.5ZM15 3.5C21.3513 3.5 26.5 8.64873 26.5 15H28.5C28.5 7.54416 22.4558 1.5 15 1.5V3.5Z"
                      fill=""
                    />
                  </svg>
                </div>
                <h4 className="text-gray-900 text-lg font-semibold leading-7 mb-3 max-lg:text-center">
                  Commitment
                </h4>
                <p className="text-gray-500 text-sm font-normal leading-5 max-lg:text-center">
                  Build your beautiful agency website with us that converts more
                  visitors than any other website and the ability to interact
                  and rotate products to solve user problems.
                </p>
              </div>
            </div>
            <div className="lg:mt-24 mt-10 bg-gradient-to-l from-violet-600 to-indigo-600 p-12 rounded-2xl ">
              <div className="lg:flex items-center justify-between gap-6">
                <div className="lg:mb-0 mb-10">
                  <h3 className="text-white font-manrope lg:text-4xl text-3xl font-semibold leading-10 mb-5">
                    Don't see the role you're interested in?
                  </h3>
                  <p className="text-indigo-100 text-xl font-normal leading-8">
                    We’re always looking for talented people to join our team.
                    Send us your CV and we will contact you for any future
                    roles.
                  </p>
                </div>
                <button className="px-2.5 h-14 flex items-center justify-center text-indigo-600 text-lg font-semibold leading-7 gap-2 rounded-full bg-white whitespace-nowrap">
                  {" "}
                  Send Your CV{" "}
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.75 11L17.4167 11M12.8333 16.5L17.6852 11.6482C17.9907 11.3426 18.1435 11.1898 18.1435 11C18.1435 10.8102 17.9907 10.6574 17.6852 10.3518L12.8333 5.5"
                      stroke="#4F46E5"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* content */}
          <Footer/>
        </div>
      </section>
    </>
  );
}

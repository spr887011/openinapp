import React, { useState } from "react";
import "./Dashboard.css";
import Chart from "react-apexcharts";

function Dashboard() {
  const [activities, setActivities] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false
        }
      },
        dataLabels: {
          enabled: false,
        },
      xaxis: {
        categories: ["week1", "week2", "week3", "week4"],
      },
      plotOptions: {
        bar: {
          columnWidth: "30%",
        },
      },
      stroke: {
        colors: ["transparent"],
        width: 10
      },
      fill: {
        opacity: 1, // Set opacity to 1 for bars
      },
    },

    series: [
      {
        name: "User",
        data: [500, 200, 300, 400],
        color: "#98D89E",
      },
      {
        name: "Guest",
        data: [400, 150, 250, 350],
        color: "#EE8484",
      },
    ],
  });

  return (
    <div className="dashboard h-full overflow-hidden dashboard-page">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full  px-3 py-4 overflow-y-auto ">
          
          <ul className="space-y-2 sidebarUl h-full flex flex-col item-center p-8">
            <li className="text-center mr-8 mb-6"><span
                  className=" board  "
                >
                  Board.
                </span></li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M9.89952 0C9.66081 0 9.43188 0.0948265 9.26308 0.263619C9.09429 0.432411 8.99947 0.661343 8.99947 0.900051V8.10046C8.99947 8.33917 9.09429 8.5681 9.26308 8.73689C9.43188 8.90568 9.66081 9.00051 9.89952 9.00051H17.0999C17.3386 9.00051 17.5676 8.90568 17.7364 8.73689C17.9051 8.5681 18 8.33917 18 8.10046C18 5.95208 17.1465 3.8917 15.6274 2.37257C14.1083 0.853439 12.0479 0 9.89952 0ZM10.7996 7.20041V1.86311C12.1462 2.05717 13.3939 2.68195 14.356 3.64402C15.318 4.60609 15.9428 5.85375 16.1369 7.20041H10.7996Z"
                    fill="white"
                  />
                  <path
                    d="M16.9379 10.8546C16.8263 10.8147 16.7078 10.7972 16.5894 10.8032C16.4709 10.8093 16.3548 10.8386 16.2478 10.8896C16.1407 10.9406 16.0448 11.0123 15.9655 11.1005C15.8863 11.1887 15.8252 11.2917 15.7859 11.4036C15.3803 12.5502 14.6908 13.5754 13.7819 14.3835C12.873 15.1916 11.7741 15.7563 10.5879 16.0249C9.40176 16.2935 8.16686 16.2573 6.99846 15.9196C5.83006 15.5819 4.76623 14.9538 3.90623 14.0938C3.04623 13.2338 2.41809 12.1699 2.0804 11.0015C1.74271 9.83313 1.70648 8.59823 1.97509 7.41204C2.2437 6.22585 2.80839 5.12703 3.61649 4.21809C4.42459 3.30916 5.44976 2.61972 6.59636 2.21411C6.82193 2.13534 7.00698 1.97018 7.11079 1.75497C7.2146 1.53976 7.22866 1.29213 7.14989 1.06655C7.07111 0.840968 6.90595 0.65592 6.69074 0.552113C6.47553 0.448306 6.2279 0.434242 6.00232 0.513016C4.56858 1.01954 3.28654 1.88106 2.27585 3.01716C1.26517 4.15325 0.558799 5.52689 0.222663 7.00986C-0.113472 8.49283 -0.0684124 10.0368 0.353638 11.4976C0.775688 12.9585 1.56097 14.2886 2.63619 15.3638C3.71141 16.439 5.04151 17.2243 6.50235 17.6463C7.9632 18.0684 9.50716 18.1135 10.9901 17.7773C12.4731 17.4412 13.8467 16.7348 14.9828 15.7241C16.1189 14.7135 16.9804 13.4314 17.487 11.9977C17.5648 11.7732 17.5508 11.5271 17.4479 11.313C17.3451 11.0989 17.1618 10.9341 16.9379 10.8546Z"
                    fill="white"
                  />
                </svg>
                <span
                  className="ml-3 font-white-700"
                >
                  Dashboard
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                >
                  <path
                    d="M3.92365 5.43145C4.13877 5.64477 4.42946 5.76447 4.73242 5.76447C5.03538 5.76447 5.32607 5.64477 5.54119 5.43145C5.64713 5.32645 5.73121 5.20152 5.7886 5.06385C5.84598 4.92618 5.87552 4.77851 5.87552 4.62936C5.87552 4.48021 5.84598 4.33253 5.7886 4.19486C5.73121 4.0572 5.64713 3.93226 5.54119 3.82726C5.32607 3.61394 5.03538 3.49425 4.73242 3.49425C4.42946 3.49425 4.13877 3.61394 3.92365 3.82726C3.47846 4.27097 3.47846 4.98922 3.92365 5.43145ZM17.0139 12.1094C17.2912 11.8345 17.5114 11.5075 17.6617 11.147C17.8119 10.7866 17.8893 10.4 17.8893 10.0095C17.8893 9.61905 17.8119 9.23244 17.6617 8.87203C17.5114 8.51162 17.2912 8.18454 17.0139 7.9097L9.9501 0.890462C9.39144 0.336196 8.63723 0.0238498 7.85027 0.0208485L3.00655 7.26358e-05C2.61268 -0.00267806 2.22218 0.0727231 1.85765 0.221911C1.49312 0.371099 1.1618 0.591111 0.88287 0.869211C0.603943 1.14731 0.382946 1.47797 0.232676 1.84206C0.0824051 2.20615 0.0058403 2.59642 0.00741959 2.9903L0.0430355 7.99577C0.0494556 8.77667 0.364151 9.5234 0.918587 10.0733L7.87846 16.9887C8.44035 17.5453 9.19927 17.8576 9.99017 17.8576C10.7811 17.8576 11.54 17.5453 12.1019 16.9887L17.0139 12.1094ZM15.9573 8.95888C16.096 9.0963 16.206 9.25983 16.2812 9.44004C16.3563 9.62025 16.395 9.81355 16.395 10.0088C16.395 10.204 16.3563 10.3973 16.2812 10.5775C16.206 10.7578 16.096 10.9213 15.9573 11.0587L11.0453 15.941C10.4621 16.5198 9.51678 16.5198 8.93358 15.941L1.9737 9.02417C1.69696 8.749 1.54014 8.37564 1.53741 7.98538L1.50031 2.97991C1.49932 2.78282 1.53748 2.58749 1.61259 2.40527C1.68769 2.22305 1.79823 2.05756 1.93781 1.9184C2.07738 1.77924 2.2432 1.66919 2.42564 1.59463C2.60809 1.52006 2.80353 1.48248 3.00061 1.48406L7.84433 1.50483C8.23807 1.50614 8.61548 1.66232 8.89499 1.93964L15.9588 8.95888H15.9573ZM17.8122 12.9849C18.0116 13.5184 18.0532 14.098 17.9322 14.6546C17.8112 15.2111 17.5325 15.721 17.1296 16.1235L14.2151 19.0381C13.6639 19.5893 13.0095 20.0266 12.2893 20.3249C11.5691 20.6232 10.7972 20.7768 10.0176 20.7768C9.23808 20.7768 8.46617 20.6232 7.74597 20.3249C7.02577 20.0266 6.37139 19.5893 5.82018 19.0381L0.652954 13.8709C0.235384 13.4538 0.000518799 12.888 0 12.2978V11.1403L5.82018 16.9605C5.92257 17.0629 6.02794 17.1608 6.13479 17.2529L6.86936 17.9889C7.28277 18.4024 7.77358 18.7304 8.31377 18.9542C8.85395 19.1779 9.43292 19.2931 10.0176 19.2931C10.6023 19.2931 11.1813 19.1779 11.7215 18.9542C12.2617 18.7304 12.7525 18.4024 13.1659 17.9889L13.9064 17.2484C14.0126 17.1561 14.1156 17.06 14.2151 16.9605L17.1296 14.046C17.4308 13.7455 17.6637 13.3836 17.8122 12.9849Z"
                    fill="white"
                  />
                </svg>
                <span className="ml-3">Transactions</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M7.3 17.2H4.6C3.64522 17.2 2.72955 16.8207 2.05442 16.1456C1.37928 15.4704 1 14.5548 1 13.6V5.49999C1 4.54521 1.37928 3.62954 2.05442 2.95441C2.72955 2.27928 3.64522 1.89999 4.6 1.89999H14.5C15.4548 1.89999 16.3705 2.27928 17.0456 2.95441C17.7207 3.62954 18.1 4.54521 18.1 5.49999V8.19999"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.39999 1V2.8"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.7 1V2.8"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 6.39999H18.1"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M15.85 13.2787L14.5 14.6287"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.5 19C16.9853 19 19 16.9853 19 14.5C19 12.0147 16.9853 10 14.5 10C12.0147 10 10 12.0147 10 14.5C10 16.9853 12.0147 19 14.5 19Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span className=" ml-3 whitespace-nowrap">Schedules</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M8.99999 3.85714C8.36427 3.85714 7.74282 4.04565 7.21423 4.39884C6.68564 4.75203 6.27366 5.25404 6.03038 5.84137C5.7871 6.4287 5.72344 7.07499 5.84747 7.6985C5.97149 8.32201 6.27762 8.89474 6.72715 9.34427C7.17668 9.79379 7.74941 10.0999 8.37292 10.2239C8.99643 10.348 9.64271 10.2843 10.23 10.041C10.8174 9.79776 11.3194 9.38577 11.6726 8.85719C12.0258 8.3286 12.2143 7.70715 12.2143 7.07142C12.2143 6.21894 11.8756 5.40138 11.2728 4.79858C10.67 4.19579 9.85247 3.85714 8.99999 3.85714ZM8.99999 9C8.61856 9 8.24569 8.88689 7.92854 8.67497C7.61138 8.46306 7.36419 8.16186 7.21822 7.80946C7.07226 7.45706 7.03406 7.06929 7.10848 6.69518C7.18289 6.32107 7.36657 5.97743 7.63629 5.70772C7.906 5.438 8.24964 5.25432 8.62375 5.17991C8.99785 5.1055 9.38562 5.14369 9.73802 5.28966C10.0904 5.43563 10.3916 5.68282 10.6035 5.99997C10.8155 6.31712 10.9286 6.68999 10.9286 7.07142C10.9281 7.58276 10.7247 8.073 10.3631 8.43457C10.0016 8.79613 9.51132 8.99949 8.99999 9Z"
                    fill="white"
                  />
                  <path
                    d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389955 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9973 6.61389 17.0482 4.32628 15.361 2.63905C13.6737 0.951808 11.3861 0.00272232 9 0ZM5.14286 15.6709V14.7857C5.14337 14.2744 5.34672 13.7841 5.70829 13.4226C6.06986 13.061 6.5601 12.8577 7.07143 12.8571H10.9286C11.4399 12.8577 11.9301 13.061 12.2917 13.4226C12.6533 13.7841 12.8566 14.2744 12.8571 14.7857V15.6709C11.6866 16.3544 10.3555 16.7146 9 16.7146C7.64453 16.7146 6.3134 16.3544 5.14286 15.6709ZM14.1377 14.7381C14.1249 13.8949 13.7814 13.0905 13.1811 12.4982C12.5808 11.9058 11.7719 11.573 10.9286 11.5714H7.07143C6.22812 11.573 5.41918 11.9058 4.81892 12.4982C4.21865 13.0905 3.8751 13.8949 3.86229 14.7381C2.69651 13.6972 1.8744 12.3267 1.50483 10.8081C1.13525 9.28958 1.23564 7.69458 1.7927 6.23434C2.34976 4.7741 3.33722 3.5175 4.62431 2.63094C5.91141 1.74437 7.43744 1.26966 9.00032 1.26966C10.5632 1.26966 12.0892 1.74437 13.3763 2.63094C14.6634 3.5175 15.6509 4.7741 16.2079 6.23434C16.765 7.69458 16.8654 9.28958 16.4958 10.8081C16.1262 12.3267 15.3041 13.6972 14.1384 14.7381H14.1377Z"
                    fill="white"
                  />
                </svg>
                <span className="ml-3 whitespace-nowrap">Users</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M16.8159 11.2879L15.5 10.1629C15.5622 9.78115 15.5944 9.39139 15.5944 9.00163C15.5944 8.61187 15.5622 8.22211 15.5 7.84039L16.8159 6.71531C16.9152 6.63034 16.9862 6.51717 17.0196 6.39084C17.053 6.26452 17.0471 6.13103 17.0027 6.00812L16.9847 5.95588C16.6224 4.94336 16.0799 4.00475 15.3834 3.18538L15.3473 3.14319C15.2628 3.04384 15.1502 2.97243 15.0243 2.93836C14.8984 2.90429 14.7652 2.90916 14.6421 2.95233L13.0087 3.53295C12.406 3.03872 11.733 2.64896 11.0057 2.37572L10.6903 0.668015C10.6665 0.53952 10.6041 0.421306 10.5115 0.329081C10.419 0.236855 10.3005 0.174983 10.1719 0.151685L10.1177 0.141639C9.07095 -0.0472131 7.96998 -0.0472131 6.92325 0.141639L6.86901 0.151685C6.74042 0.174983 6.62197 0.236855 6.52938 0.329081C6.4368 0.421306 6.37447 0.53952 6.35067 0.668015L6.03324 2.38376C5.31176 2.65705 4.63988 3.0466 4.04426 3.53696L2.39883 2.95233C2.27581 2.90881 2.14246 2.90377 2.0165 2.93786C1.89054 2.97195 1.77793 3.04357 1.69365 3.14319L1.65749 3.18538C0.961838 4.00533 0.419449 4.94379 0.056258 5.95588L0.0381763 6.00812C-0.0522317 6.25925 0.0221038 6.54052 0.22502 6.71531L1.55703 7.85244C1.49475 8.23015 1.46461 8.61589 1.46461 8.99962C1.46461 9.38536 1.49475 9.7711 1.55703 10.1468L0.22502 11.2839C0.125763 11.3689 0.0547239 11.4821 0.0213484 11.6084C-0.0120272 11.7347 -0.0061578 11.8682 0.0381763 11.9911L0.056258 12.0434C0.419899 13.0559 0.95833 13.9901 1.65749 14.8139L1.69365 14.8561C1.77814 14.9554 1.89075 15.0268 2.01663 15.0609C2.14252 15.095 2.27577 15.0901 2.39883 15.0469L4.04426 14.4623C4.64296 14.9545 5.31198 15.3443 6.03324 15.6155L6.35067 17.3312C6.37447 17.4597 6.4368 17.5779 6.52938 17.6702C6.62197 17.7624 6.74042 17.8243 6.86901 17.8476L6.92325 17.8576C7.97959 18.0475 9.06133 18.0475 10.1177 17.8576L10.1719 17.8476C10.3005 17.8243 10.419 17.7624 10.5115 17.6702C10.6041 17.5779 10.6665 17.4597 10.6903 17.3312L11.0057 15.6235C11.7327 15.351 12.4095 14.96 13.0087 14.4663L14.6421 15.0469C14.7651 15.0904 14.8985 15.0955 15.0244 15.0614C15.1504 15.0273 15.263 14.9557 15.3473 14.8561L15.3834 14.8139C16.0826 13.9881 16.621 13.0559 16.9847 12.0434L17.0027 11.9911C17.0932 11.744 17.0188 11.4627 16.8159 11.2879ZM14.0735 8.07746C14.1238 8.38083 14.1499 8.69223 14.1499 9.00364C14.1499 9.31504 14.1238 9.62645 14.0735 9.92982L13.9409 10.7355L15.4417 12.0192C15.2142 12.5434 14.927 13.0396 14.5858 13.4979L12.7214 12.8369L12.0906 13.3553C11.6104 13.7491 11.076 14.0585 10.4974 14.2754L9.73193 14.5627L9.37231 16.5115C8.80489 16.5758 8.23202 16.5758 7.6646 16.5115L7.30498 14.5587L6.54555 14.2674C5.97296 14.0504 5.44056 13.741 4.96441 13.3493L4.33356 12.8289L2.45709 13.4959C2.11555 13.0358 1.83027 12.5396 1.60123 12.0172L3.11808 10.7214L2.98749 9.91776C2.93927 9.61841 2.91315 9.30902 2.91315 9.00364C2.91315 8.69625 2.93726 8.38886 2.98749 8.08951L3.11808 7.28589L1.60123 5.99004C1.82826 5.46567 2.11555 4.97144 2.45709 4.51136L4.33356 5.17837L4.96441 4.65802C5.44056 4.26626 5.97296 3.95686 6.54555 3.73988L7.30698 3.45258L7.66661 1.49977C8.23116 1.43548 8.80776 1.43548 9.37432 1.49977L9.73394 3.44857L10.4994 3.73586C11.076 3.95284 11.6124 4.26224 12.0926 4.65602L12.7234 5.17435L14.5878 4.51337C14.9294 4.97345 15.2147 5.46969 15.4437 5.99205L13.9429 7.27584L14.0735 8.07746ZM8.52247 5.26677C6.56966 5.26677 4.98651 6.84992 4.98651 8.80273C4.98651 10.7555 6.56966 12.3387 8.52247 12.3387C10.4753 12.3387 12.0584 10.7555 12.0584 8.80273C12.0584 6.84992 10.4753 5.26677 8.52247 5.26677ZM10.1137 10.3939C9.90495 10.6032 9.65693 10.7692 9.38386 10.8823C9.11078 10.9954 8.81804 11.0533 8.52247 11.0529C7.92176 11.0529 7.35721 10.8178 6.93129 10.3939C6.72199 10.1852 6.55602 9.93719 6.44293 9.66412C6.32984 9.39104 6.27185 9.0983 6.27231 8.80273C6.27231 8.20202 6.50738 7.63747 6.93129 7.21155C7.35721 6.78563 7.92176 6.55258 8.52247 6.55258C9.12318 6.55258 9.68773 6.78563 10.1137 7.21155C10.323 7.42025 10.4889 7.66827 10.602 7.94135C10.7151 8.21442 10.7731 8.50716 10.7726 8.80273C10.7726 9.40344 10.5376 9.96799 10.1137 10.3939Z"
                    fill="white"
                  />
                </svg>
                <span className=" ml-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
            <div className="absolute bottom-10">
            <li className="mb-4"><span
                  className="help"
                >
                  Help.
                </span></li>

                <li><span
                  className="help"
                >
                Contact Us
                </span></li>
                </div>

          </ul>
          
          

        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 pt-0 rounded-lg ">
        <div className="grid grid-cols-2  mb-5  text-left ">
         <div className="h-rights"> Dashboard</div>
         <div className="h-rights"> 
         <ul class="list-none list-inside flex justify-end">
  <li class=" pl-4"><div class="relative">
  <input type="text" placeholder="Search" class="search-bar w-full px-1 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring" />
  {/* <span class="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-600">
    <svg class="h-3 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4-4"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"></path>
    </svg>
  </span> */}
</div></li>
  <li class="mt-2 pl-4"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="22" viewBox="0 0 19 22" fill="none">
<path d="M16.3861 12.6564V8.91122C16.3861 5.55139 14.2011 2.72107 11.2411 1.86988C10.9481 1.09912 10.2321 0.55603 9.38611 0.55603C8.54011 0.55603 7.82411 1.09912 7.53111 1.86988C4.57111 2.72211 2.38611 5.55139 2.38611 8.91122V12.6564L0.679109 14.4392C0.586067 14.536 0.512279 14.6511 0.461994 14.7778C0.411709 14.9046 0.385919 15.0404 0.386109 15.1776V17.2664C0.386109 17.5434 0.491466 17.809 0.679003 18.0049C0.866539 18.2008 1.12089 18.3108 1.38611 18.3108H17.3861C17.6513 18.3108 17.9057 18.2008 18.0932 18.0049C18.2808 17.809 18.3861 17.5434 18.3861 17.2664V15.1776C18.3863 15.0404 18.3605 14.9046 18.3102 14.7778C18.2599 14.6511 18.1862 14.536 18.0931 14.4392L16.3861 12.6564ZM16.3861 16.222H2.38611V15.61L4.09311 13.8272C4.18615 13.7304 4.25994 13.6153 4.31023 13.4886C4.36051 13.3618 4.3863 13.226 4.38611 13.0888V8.91122C4.38611 6.03181 6.62911 3.68923 9.38611 3.68923C12.1431 3.68923 14.3861 6.03181 14.3861 8.91122V13.0888C14.3861 13.3666 14.4911 13.6319 14.6791 13.8272L16.3861 15.61V16.222ZM9.38611 21.444C10.0054 21.4448 10.6096 21.2441 11.1146 20.8697C11.6196 20.4954 12.0004 19.966 12.2041 19.3552H6.56811C6.77177 19.966 7.15259 20.4954 7.65762 20.8697C8.16265 21.2441 8.76681 21.4448 9.38611 21.444Z" fill="black"/>
</svg></li>
  <li class="mt-2 pl-4"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 33 33" fill="none">
<circle cx="16.7542" cy="16.7225" r="15.9145" fill="#7FCD93"/>
</svg></li>
</ul>
         </div>
          </div>
          <div className="grid grid-cols-4 gap-4 mb-4">
            <div className="flex items-center justify-center rounded bg-white total-rev py-3 text-left">
            <div className="total-rev-width ml-5">
             <div className="block py-2"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
<circle cx="16.7542" cy="16.7225" r="15.9145" fill="#7FCD93"/>
</svg></div>
             <div className="total-rev-content pb-1">Total Revenues</div>
             <div className="total-rev-amt">$2,129,430</div>
              </div>
              <div className="total-rev-width">
              <div className="total-rev-right ml-5 mt-14">
              +2.5%
              </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-white total-rev py-1 text-left">
            <div className="total-rev-width ml-5">
             <div className="block py-2"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
<circle cx="16.7542" cy="16.7225" r="15.9145" fill="#7FCD93"/>
</svg></div>
             <div className="total-rev-content pb-1">Total Revenues</div>
             <div className="total-rev-amt">$2,129,430</div>
              </div>
              <div className="total-rev-width">
              <div className="total-rev-right ml-5 mt-14">
              +2.5%
              </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-white total-rev py-1 text-left">
            <div className="total-rev-width ml-5">
             <div className="block py-2"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
<circle cx="16.7542" cy="16.7225" r="15.9145" fill="#7FCD93"/>
</svg></div>
             <div className="total-rev-content pb-1">Total Revenues</div>
             <div className="total-rev-amt">$2,129,430</div>
              </div>
              <div className="total-rev-width">
              <div className="total-rev-right ml-5 mt-14">
              +2.5%
              </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-white total-rev py-1 text-left">
            <div className="total-rev-width ml-5">
             <div className="block py-2"><svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
<circle cx="16.7542" cy="16.7225" r="15.9145" fill="#7FCD93"/>
</svg></div>
             <div className="total-rev-content pb-1">Total Revenues</div>
             <div className="total-rev-amt">$2,129,430</div>
              </div>
              <div className="total-rev-width">
              <div className="total-rev-right ml-5 mt-14">
              +2.5%
              </div>
              </div>
            </div>
          </div>
          <div className=" rounded bg-white total-rev p-5 h-50 mb-4 rounded">
          <div className=" grid grid-cols-1 gap-4">
          <div className="block py-2 top-prdt text-left ">Top Products</div>
            </div>
            <div className=" grid grid-cols-2 gap-4">
          <div className="block date text-left ">May-June 2023</div>
            <div className="flex justify-end"> 
            <div class="guest mr-6"> 
            <span className="inline-block mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
<circle cx="5.52881" cy="5.33032" r="5" fill="#E9A0A0"/></svg></span>
Guest </div> 

<div class="guest mr-6"> 
            <span className="inline-block mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
<circle cx="5" cy="5.33032" r="5" fill="#9BDD7C"/>
</svg></span>
User </div> 
</div>
            </div>
          <div className=" h-30">
            <Chart
              options={activities.options}
              series={activities.series}
              type="bar"
              width="100%"
              height="250px"
            />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 mb-4">
          <div className="flex rounded bg-white total-rev py-4 text-left totl-prdct">
            <div className="total-rev-width">
             <div className="block py-2 top-prdt ">Top Products</div>
             <div className="total-rev-content pb-1 text-center">Image</div>
              </div>
              <div className="total-rev-width">
              <div className="mt-2 date text-right">
                May-June 2023
                </div>
              <div className="mt-2">
              <div className="prots">
              Basic tees
              </div>
              <div className="prots-per">
              55%
              </div>
              <div className="prots">
              Custom Short Pants
              </div>
              <div className="prots-per">
              31%
              </div>
              <div className="prots">
              Super Hoodies
              </div>
              <div className="prots-per">
              14%
              </div>
              </div>
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-white total-rev  py-4">
            <div className="block rounded-full w-16 h-16 bg-gray-100 ">
            
                <svg
                  className="w-4 h-4 text-gray-400 dark:text-gray-500 mt-6 ml-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              <div className="flex mt-8 add  items-center justify-center">Add Profile</div>
              </div>
              {/* <div>Add Profile</div> */}
            
            </div>
            {/* <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p className="text-2xl text-gray-400 dark:text-gray-500">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </p>
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="w-full sm:w-1/5   flex flex-col justify-between ">
    </div>
    <div className='w-full sm:w-4/5  '>
      <div className='' >
      <Chart
              options={activities.options}
              series={activities.series}
              type="bar"
              width="90%"
            />
            </div>
    </div> */}
    </div>
  );
}

export default Dashboard;

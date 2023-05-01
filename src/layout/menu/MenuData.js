const menu = [
  { heading: "Account" },
  {
    icon: "layout-alt-fill",
    text: "Dashboard",
    link: "/dashboard",
  },

  {
    icon: "wallet-fill",
    text: "Wallets",
    link: "/wallets",
  },
  {
    icon: "user-fill",
    text: "Profile",
    link: "/profile/details",
    active: false,
    subMenu: [
      {
        text: "Details",
        link: "/profile/details",
      },
      {
        text: "Notifications",
        link: "/profile/notifications",
      },
      {
        text: "Security Settings",
        link: "/profile/settings",
      },
      {
        text: "Banking Details",
        link: "/profile/banking",
      },
    ],
  },

  {
    heading: "Trade",
  },

  {
    icon: "users-fill",
    text: "Marketplace",
    link: "/marketplace/buy",
    active: false,
    subMenu: [
      {
        text: "Buy",
        link: "/marketplace/buy",
      },
      {
        text: "Sell",
        link: "/marketplace/sell",
      },
      {
        text: "Create",
        link: "/marketplace/user-details-regular/1",
      },
      {
        text: "My Offers",
        link: "/marketplace/user-profile-regular",
      },
    ],
  },
  {
    icon: "repeat-fill",
    text: "Express",
    link: "/swap",
  },
  {
    icon: "list-fill",
    text: "History",
    link: "/history-payment",
  },
  {
    heading: "Earn",
  },
  {
    icon: "pie-fill",
    text: "Staking",
    link: "/pricing-table",
    active: false,
    subMenu: [
      {
        text: "Stake & Earn",
        link: "/pricing-table",
      },
      {
        text: "Staking History",
        link: "/invoice-list",
      },
    ],
  },
  {
    icon: "user-list-fill",
    text: "Affiliates",
    link: "/governance",
  },

  {
    heading: "Support",
  },
  {
    icon: "help-fill",
    text: "FAQ",
    link: "/faq",
    active: "false",
  },

  {
    icon: "chat-circle-fill",
    text: "Contact Support",
    link: "/components",
    panel: true,
    subPanel: [
      {
        icon: "layers",
        text: "Ui Elements",
        active: false,
        subMenu: [
          {
            text: "Components",
            link: "/components",
          },
          {
            text: "Alerts",
            link: "/components/alerts",
          },
          {
            text: "Accordions",
            link: "/components/accordions",
          },
          {
            text: "Avatar",
            link: "/components/avatar",
          },
          {
            text: "Badges",
            link: "/components/badges",
          },
          {
            text: "Buttons",
            link: "/components/buttons",
          },
          {
            text: "Button Group",
            link: "/components/button-group",
          },
          {
            text: "Breadcrumbs",
            link: "/components/breadcrumbs",
          },
          {
            text: "Cards",
            link: "/components/cards",
          },
          {
            text: "Carousel",
            link: "/components/carousel",
          },
          {
            text: "Dropdowns",
            link: "/components/dropdowns",
          },
          {
            text: "Modals",
            link: "/components/modals",
          },
          {
            text: "Pagination",
            link: "/components/pagination",
          },
          {
            text: "Popovers",
            link: "/components/popovers",
          },
          {
            text: "Progress",
            link: "/components/progress",
          },
          {
            text: "Spinner",
            link: "/components/spinner",
          },
          {
            text: "Tabs",
            link: "/components/tabs",
          },
          {
            text: "Toast",
            link: "/components/toast",
          },
          {
            text: "Typography",
            link: "/components/typography",
          },
          {
            text: "Tooltips",
            link: "/components/tooltips",
          },
          {
            text: "Utilities",
            active: false,
            subMenu: [
              {
                text: "Borders",
                link: "/components/util-border",
              },
              {
                text: "Colors",
                link: "/components/util-colors",
              },
              {
                text: "Display",
                link: "/components/util-display",
              },
              {
                text: "Embeded",
                link: "/components/util-embeded",
              },
              {
                text: "Flex",
                link: "/components/util-flex",
              },
              {
                text: "Text",
                link: "/components/util-text",
              },
              {
                text: "Sizing",
                link: "/components/util-sizing",
              },
              {
                text: "Spacing",
                link: "/components/util-spacing",
              },
              {
                text: "Others",
                link: "/components/util-others",
              },
            ],
          },
        ],
      },
      {
        icon: "dot-box",
        text: "Crafted Icons",
        active: false,
        subMenu: [
          {
            text: "SVG Icon-Exclusive",
            link: "/svg-icons",
          },
          {
            text: "Nioicon - HandCrafted",
            link: "/nioicon",
          },
        ],
      },
      {
        icon: "table-view",
        text: "Tables",
        active: false,
        subMenu: [
          {
            text: "Basic Tables",
            link: "/table-basic",
          },
          {
            text: "Special Tables",
            link: "/table-special",
          },
          {
            text: "DataTables",
            link: "/table-datatable",
          },
        ],
      },
      {
        icon: "card-view",
        text: "Forms",
        active: false,
        subMenu: [
          {
            text: "Form Elements",
            link: "/components/form-elements",
          },
          {
            text: "Checkbox Radio",
            link: "/components/checkbox-radio",
          },
          {
            text: "Advanced Controls",
            link: "/components/advanced-control",
          },
          {
            text: "Input Group",
            link: "/components/input-group",
          },
          {
            text: "Form Upload",
            link: "/components/form-upload",
          },
          {
            text: "Form Layouts",
            link: "/components/form-layouts",
          },
          {
            text: "Form Validation",
            link: "/components/form-validation",
          },
          {
            text: "Date Time Picker",
            link: "/components/datetime-picker",
          },
          {
            text: "Number Spinner",
            link: "/components/number-spinner",
          },
          {
            text: "noUiSlider",
            link: "/components/nouislider",
          },
          {
            text: "Wizard Basic",
            link: "/components/wizard-basic",
          },
          {
            text: "Rich Editor",
            active: false,
            subMenu: [
              {
                text: "Quill",
                link: "/components/quill",
              },
              {
                text: "Tinymce",
                link: "/components/tinymce",
              },
            ],
          },
        ],
      },
      {
        icon: "pie",
        text: "Charts",
        active: false,
        subMenu: [
          {
            text: "Chart Js",
            link: "/charts/chartjs",
          },
          {
            text: "Knobs",
            link: "/charts/knobs",
          },
        ],
      },
      {
        icon: "puzzle",
        text: "Widgets",
        subMenu: [
          {
            text: "Card Widgets",
            link: "/components/widgets/cards",
          },
          {
            text: "Chart Widgets",
            link: "/components/widgets/charts",
          },
          {
            text: "Rating Widgets",
            link: "/components/widgets/rating",
          },
        ],
      },
      {
        icon: "block-over",
        text: "Miscellaneous",
        subMenu: [
          {
            text: "Slick Sliders",
            link: "/components/misc/slick-slider",
          },
          {
            text: "JsTree",
            link: "/components/misc/jsTree",
          },
          {
            text: "React Toastify",
            link: "/components/misc/toastify",
          },
          {
            text: "Sweet Alert",
            link: "/components/misc/sweet-alert",
          },
          {
            text: "React DualListBox",
            link: "/components/misc/dual-list",
          },
          {
            text: "React Beautiful Dnd",
            link: "/components/misc/beautiful-dnd",
          },
          {
            text: "Google Map",
            link: "/components/misc/map",
          },
        ],
      },
    ],
  },
];
export default menu;

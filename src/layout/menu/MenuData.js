const menu = [
  { heading: "Account", requireConnect: true },
  {
    icon: "layout-alt-fill",
    text: "Dashboard",
    link: "/dashboard",
    requireConnect: true,
  },

  {
    icon: "wallet-fill",
    text: "Wallets",
    link: "/wallets",
    requireConnect: true,
  },
  {
    icon: "user-fill",
    text: "Profile",
    active: false,
    requireConnect: true,
    subMenu: [
      {
        text: "Details",
        link: "/profile/details",
        requireConnect: true,
      },
      {
        text: "Notifications",
        link: "/profile/notifications",
        requireConnect: true,
      },

      {
        text: "Banking Details",
        link: "/profile/banking",
        requireConnect: true,
      },
    ],
  },

  {
    heading: "Trade",
  },

  {
    icon: "users-fill",
    text: "Marketplace",
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
        link: "/marketplace/create-offer",
        requireConnect: true,
      },
      // {
      // text: "My Offers",
      // link: "/marketplace/user-profile-regular",
      // requireConnect: true,
      // },
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
    requireConnect: true,
  },
  {
    heading: "Earn",
  },
  {
    icon: "pie-fill",
    text: "Staking",
    active: "false",
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
  },
];
export default menu;

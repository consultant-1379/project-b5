const externals = {
  apps: [{
    path: "app-1",
    entry: "App1"
  }],
  components: {
    default: [],
    shareable: [{
      path: "e-get-data",
      entry: "EGetData"
    }, {
      path: "project-menu",
      entry: "ProjectMenu"
    }, {
      path: "custom-table",
      entry: "CustomTable"
    }, {
      path: "print-problems",
      entry: "PrintProblems"
    }]
  },
  panels: [],
  plugins: []
};

module.exports = externals;
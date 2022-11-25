export const URL_BASE = "https://app.asana.com/api/1.0";

export const Auth = {
  headers: {
    Authorization: "Bearer 1/1202124850517102:6ca0c9a12b39d91e45d40463f7ea54e2",
  },
};

export const body_post_tasks = {
  data: {
    approval_status: "pending",
    assignee:{gid: '1202124850517102', name: 'jullia izidorio paiva silva', resource_type: 'user'},
    assignee_section: null,
    assignee_status: "upcoming",
    completed: false,
    completed_by: null,
    custom_fields: {},
    due_at: null,
    due_on: null,
    external: {},
    followers: [],
    html_notes:
      "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>",
    liked: true,
    name: "primeira task",
    notes: "Mittens really likes the stuff from Humboldt.",
    parent: null,
    projects: ["1202124799286437"],
    resource_subtype: "default_task",
    start_at: null,
    start_on: null,
    tags: [],
    workspace: "1202124799113636",
  },
};
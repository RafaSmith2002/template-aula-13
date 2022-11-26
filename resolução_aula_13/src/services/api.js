export const URL_BASE = "https://app.asana.com/api/1.0";

export const Auth = {
  headers: {
    Authorization: "Bearer 1/1202132757380123:f0a6a1d52032fad454f65588e294637c",
  },
};

export const body_post_tasks = {
  data: {
    approval_status: "pending",
    assignee:{gid: '1202132757380123', name: 'rafael silva', resource_type: 'user'},
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
    projects: ["1202132757380123"],
    resource_subtype: "default_task",
    start_at: null,
    start_on: null,
    tags: [],
    workspace: "1202132757380123",
  },
};

let activity = {
  name,
  time_from,
  time_to,
  activity_description
}

var array = [];

function take_activity_data() {
  let name = document.getElementById('activity_name').value;
  let activity_description = document.getElementById('activity_description').value;
  let time_from = document.getElementById('time_from').value;
  let time_to = document.getElementById('time_to').value;

  let add_activity = Object.create(activity);
  add_activity.name = name;
  add_activity.time_from = time_from;
  add_activity.time_to = time_to;
  add_activity.activity_description = activity_description;

  array.push(add_activity);

  display_activity(add_activity);
}

function display_activity(add_activity) {
  let time = `From: ${add_activity.time_from} to ${add_activity.time_to} `;
  let box = document.querySelector('#activity_view');
  let row = document.createElement('div');
  row.className = 'row_activity';

  const class_name_column = 'column';

  let column_name = document.createElement('div');
  column_name.className = class_name_column;
  column_name.innerHTML = add_activity.name;

  let column_time = document.createElement('div');
  column_time.className = class_name_column;
  column_time.innerHTML = time;

  let column_descript = document.createElement('div');
  column_descript.className = class_name_column;
  column_descript.innerHTML = add_activity.activity_description;

  
  box.appendChild(row);
  row.appendChild(column_name);
  row.appendChild(column_time);
  row.appendChild(column_descript);
}


let adding_button = document.getElementById('adding_button');
adding_button.addEventListener('click', take_activity_data);


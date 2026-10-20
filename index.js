require('datejs');

function combineUsers(...args) {
  const combinedObject = { users: [] };

  args.forEach(users => {
    combinedObject.users = [...combinedObject.users, ...users];
  });

  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  return combinedObject;
}

module.exports = combineUsers;

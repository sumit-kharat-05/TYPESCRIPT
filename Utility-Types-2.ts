type Roles = 'Admin' | 'Guest' | 'User';

const permsns : Record <Roles,boolean> = {Admin:true , Guest:true , User:true};
console.log(permsns);

type noGuest = Exclude<Roles,'Guest'>;
type onlyAdmin = Extract<Roles,'Admin'>
type Name = NonNullable<string | null>
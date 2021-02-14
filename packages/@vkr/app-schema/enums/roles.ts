export const roles: string[] = [
  'administrator', // Has access to { company | workspaces | employee } statistics
  'lead', // Has access to { workspaces | employee } statistics
  'employee', // Has only access to its own statistic
]

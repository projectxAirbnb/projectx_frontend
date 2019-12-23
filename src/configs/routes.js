const routes = {
  HOME() { return `/`; },
  LOGIN() { return `/login`; },
  DEVELOPER(param) { return `/developer/${param}`; }
};

export default routes;

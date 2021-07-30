const userTypes = {
  RECRUITER: "RECRUITER",
  JOBSEEKER: "JOBSEEKER",
};

export const publicApiRoutes = ["/auth/login", "/auth/register"];

const publicRoutes = ["/"];

const jobSeekerRoutes = ["/jobseeker", "/jobseeker/onboarding"];

const recrutierRoutes = [
  "/recruiter",
  "/recruiter/onboarding",
  "/recruiter/postedjobs",
  "/recruiter/profile",
  "/recruiter/createNewPost",
  "/recruiter/candidates",
];

export const validateRoute = (user, route) => {
  let redirectingRoute = route;
  //if user is not logged in and wants to open protected route
  if (!user && !publicRoutes.includes(route)) {
    redirectingRoute = "/";
  }

  //if user is logged in and has not completed onboarding
  if (user && !user.isOnboardingCompleted) {
    redirectingRoute = `/${user?.userType?.toLowerCase()}/onboarding`;
  }

  //if user is logged in and has not completed onboarding
  if (user && user.isOnboardingCompleted && route.includes("/onboarding")) {
    redirectingRoute = `/${user?.userType?.toLowerCase()}`;
  }

  //if user is logged in and wants to access other routes
  if (
    user &&
    user.userType === userTypes.JOBSEEKER &&
    !jobSeekerRoutes.includes(route)
  ) {
    redirectingRoute = "/jobseeker";
  }

  //if user is logged in and wants to access other routes
  if (
    user &&
    user.userType === userTypes.RECRUITER &&
    !recrutierRoutes.includes(route)
  ) {
    redirectingRoute = "/recruiter";
  }

  return redirectingRoute === route ? null : redirectingRoute;
};

const userTypes = {
  RECRUITER: "RECRUITER",
  JOBSEEKER: "JOBSEEKER",
};

export const publicApiRoutes = ["/auth/login", "/auth/register"];

const publicRoutes = ["/"];

const jobSeekerRoutes = [
  "/jobseeker",
  "/jobseeker/onboarding",
  "/jobseeker/profile",
  "/jobseeker/jobs/",
];

const recrutierRoutes = [
  "/recruiter",
  "/recruiter/onboarding",
  "/recruiter/postedjobs",
  "/recruiter/profile",
  "/recruiter/createNewPost",
  "/recruiter/candidates",
];

export const validateRoute = (user, route) => {
  let redirectRoute = null;
  //if user is not logged in and wants to open protected route
  if (!user && !publicRoutes.includes(route)) {
    redirectRoute = "/";
  }

  //if user is logged in and has not completed onboarding
  if (user && !user.isOnboardingCompleted) {
    redirectRoute = `/${user.userType.toLowerCase()}/onboarding`;
  }

  //if user is logged in and has not completed onboarding
  if (user && user.isOnboardingCompleted && route.includes("/onboarding")) {
    redirectRoute = `/${user.userType.toLowerCase()}`;
  }

  //if user is logged in and wants to access other routes
  if (
    user &&
    user.userType === userTypes.JOBSEEKER &&
    !jobSeekerRoutes.some((item) => route.startsWith(item))
  ) {
    redirectRoute = "/jobseeker";
  }

  //if user is logged in and wants to access other routes
  if (
    user &&
    user.userType === userTypes.RECRUITER &&
    !recrutierRoutes.some((item) => route.startsWith(item))
  ) {
    redirectRoute = "/recruiter";
  }

  return redirectRoute === route ? null : redirectRoute;
};

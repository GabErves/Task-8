import supabase from "./supabase";

const getCurrentUser = () => {
  return {
    id: 1,
    email: "gerves20@gmail.com",
    name: "Gabby Erves",
    bio: "My name is Gabby",
    avatar: "https://placebear.com/200/200",
  };
};

const getLinks = (userId) => {
  return [
    {
      id: 1,
      userId: 1,
      url: "https://twitter.com/gabbyshlabby",
      order: 1,
      linkType: "social",
      title: "Twitter",
    },
    {
      id: 2,
      userId: 1,
      url: "https://facebook.com/foobar",
      order: 2,
      linkType: "social",
      title: "Facebook",
    },
    {
      id: 3,
      userId: 1,
      url: "https://mycompany.com",
      order: 1,
      linkType: "link",
      title: "My Company!",
    },
    {
      id: 4,
      userId: 1,
      url: "https://myteam.com",
      order: 2,
      linkType: "link",
      title: "Go sportsball Go",
    },
  ];
};

const getLinksFiltered = (userId, by) => {
  if (!["social", "link"].includes(by)) {
    return false;
  }

  return getLinks()
    .filter(({ linkType }) => linkType === by)
    .sort((a, b) => a.order - b.order);
};

const getSocialLinks = (userId) => {
  return getLinksFiltered(userId, "social");
};

const getLinksLinks = (userId) => {
  return getLinksFiltered(userId, "link");
};

const registerUser = async (email, password, name, slug) =>{
  const {data, error} = await supabase
    .from('profile')
    .select('')
    .eq("slug", "slug");
  if(data.length > 0){
    return {
      success: false,
      message: "User slug already exists"
    }
  }
  const authResponse = supabase.auth.signUp((
    email, password

  ))
}

export { getLinksLinks, getSocialLinks, getCurrentUser, getLinks, registerUser };

import { Meteor } from 'meteor/meteor';
import { moment } from 'meteor/momentjs:moment';
import Idea from '../../api/ideas/Idea';
import Person from '../../api/people/Person';
import Comment from '../../api/comments/Comment';

// create test user and his personal account
Meteor.users.upsert({ email: "test@kickupstartup.com"}, {
  username: "test",
  email: "test@kickupstartup.com",
  password: "pwd test account"
});
let user = Meteor.users.findOne({ email: "test@kickupstartup.com"});
let uid = user._id;
Person.upsert({userId: uid}, {
  firstName: "John",
  lastName: "Smith",
  headline: "Product Manager, Blockchain Enthusiast, Web, UI/UX Designer",
  aboutMe: "I am the best from the best.",
  languages: ["English"],
  location: {
    city: "London",
    country: "United Kingdom"
  },
  info : {
    maritalStatus: 2,
    children: 2,
    birthDate: moment("1995-12-25").toDate()
  },
  interests: {
    industries: ["Space", "Computer", "Food", "Fashion"],
    sports: ["Snowboarding", "Football", "Ping-Pong", "Tennis"]
  },
  experience: {
    skills: ["Programming", "Mining", "Playing guitar"],
    projects: ["Could be project from our db", "Could be any other project from person's experience"]
  },
  userId: uid
});

// insert ideas for testing
Idea.upsert({ name: "Idea 1", userId: uid}, {
  name: "Idea 1",
  draft: "{\"entityMap\":{},\"blocks\":[{\"key\":\"btct4\",\"text\":\"Motto: it all begins with a dream\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":5,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"aov4u\",\"text\":\"Description:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":11,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"a9okf\",\"text\":\"Platform for creating successful startups, where you will find help and people interested in your business\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"cut3l\",\"text\":\"Problem:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":7,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"6gb8\",\"text\":\"It's often difficult to understand who is your target market and ask them whether problem exists and worth solving.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8oa7t\",\"text\":\"Personal Story:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":14,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"d254\",\"text\":\"I personally failed with my previous startup due to the reason that the problem I thought exists was perfectly solved by other means and I was not able successfully to determine who is my target customer.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"7d8cb\",\"text\":\"Solution:\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":8,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}},{\"key\":\"e9554\",\"text\":\"Create a platform where I can ask other people if my idea makes any sense and the problem I have identified really exists.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"n9i7\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
  solution: "{\"entityMap\":{},\"blocks\":[{\"key\":\"579hb\",\"text\":\"Create a platform where I can ask other people if my idea makes any sense and the problem I have identified really exists.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
  problem: "{\"entityMap\":{},\"blocks\":[{\"key\":\"3vm7j\",\"text\":\"It's often difficult to understand who is your target market and ask them whether problem exists and worth solving.\",\"type\":\"todo\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
  story: "{\"entityMap\":{},\"blocks\":[{\"key\":\"9dt6k\",\"text\":\"I personally failed with my previous startup due to the reason that the problem I thought exists was perfectly solved by other means and I did not understand who is my target customer.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}",
  public: true,
  status: 1,
  categories: ["Toys", "Weapon"],
  customer: {
    market: 3,
    geographic: [1,3],
    demographic: [2,3],
    gender: 2
  },
  needStatement: "Need statement 1",
  keyBenefit: "Key benefit 1",
  primaryCompetitor: "Primary competitor 1",
  differentiationStatement: "Differentiation statement",
  userId: uid
});
Idea.upsert({ name: "Idea 2", userId: uid}, {
  name: 'Idea 2',
  draft: '{\"entityMap\":{},\"blocks\":[{\"key\":\"3q497\",\"text\":\"Хочется видеть свой прогресс, и причины почему я делаю то что делаю, чтобы мотивировать себя продолжать и идти к своим целям. \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"8jrav\",\"text\":\"Трудно каждый день делать одни и те же вещи, когда список их большой. Хотелось бы иметь простое приложение где пошагово можно пройти и выполнить каждую задачу и сохранить для статистики результаты.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}',
  problem: '{\"entityMap\":{},\"blocks\":[{\"key\":\"94lp3\",\"text\":\"Хочется видеть свой прогресс, и причины почему я делаю то что делаю, чтобы мотивировать себя продолжать и идти к своим целям. \",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}',
  story: '{\"entityMap\":{},\"blocks\":[{\"key\":\"bjaj2\",\"text\":\"Трудно каждый день делать одни и те же вещи, когда список их большой. Хотелось бы иметь простое приложение где пошагово можно пройти и выполнить каждую задачу и сохранить для статистики результаты.\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}]}',
  public: true,
  status: 1,
  userId: uid
});
Idea.upsert({ name: "Idea 3", userId: uid}, {
  name: 'Idea 3',
  userId: uid
});
Idea.upsert({ name: "Idea 4", userId: uid}, {
  name: 'Idea 4',
  status: 0,
  userId: uid
});
Idea.upsert({ name: "Idea 5", userId: uid}, {
  name: 'Idea 5',
  status: 0,
  userId: uid
});

// insert other people accounts for testing
Meteor.users.upsert({ email: "test1@kickupstartup.com"}, {
  username: "test 1",
  email: "test1@kickupstartup.com",
  password: "pwd test account 1"
});
let user1 = Meteor.users.findOne({ email: "test1@kickupstartup.com"});
Person.upsert({userId: user1._id}, {
  firstName: "Иван",
  lastName: "Иванов",
  headline: "Менеджер закупок",
  aboutMe: "Ищу новую работу.",
  languages: ["Английский", "Русский"],
  location: {
    city: "Москва",
    country: "Россия"
  },
  interests: {
    industries: ["Еда"],
    sports: ["Футбол"]
  },
  userId: user1._id
});
Meteor.users.upsert({ email: "test2@kickupstartup.com"}, {
  username: "test 2",
  email: "test2@kickupstartup.com",
  password: "pwd test account 2"
});
let user2 = Meteor.users.findOne({ email: "test2@kickupstartup.com"});
Person.upsert({userId: user2._id}, {
  userId: user2._id,
  firstName: "Семен",
  lastName: "Бенедиктович",
  headline: "Депутат",
  aboutMe: "Золотые мои слова.",
  languages: ["Русский"],
  location: {
    city: "Минск",
    country: "Беларусь"
  },
  interests: {
    industries: ["Финансы"],
    sports: ["Хоккей"]
  },
});
Meteor.users.upsert({ email: "test3@kickupstartup.com"}, {
  username: "test 3",
  email: "test3@kickupstartup.com",
  password: "pwd test account 3",
});
let user3 = Meteor.users.findOne({ email: "test3@kickupstartup.com"});
Person.upsert({userId: user3._id}, {
  userId: user3._id,
  firstName: "Tom",
  lastName: "Cat",
  headline: "Chaising Mouse",
  location: {
    city: "Holywood"
  }
});
Meteor.users.upsert({ email: "test4@kickupstartup.com"}, {
  username: "test 4",
  email: "test4@kickupstartup.com",
  password: "pwd test account 4"
});
let user4 = Meteor.users.findOne({ email: "test4@kickupstartup.com"});
Person.upsert({userId: user4._id}, {
  userId: user4._id,
  headline: "Никому ничего не скажу."
});

// insert comments for testing
const idea = Idea.findOne({userId: uid, name: "Idea 1"});

Comment.upsert({userId: user2._id, ideaId: idea._id}, {
  userId: user2._id,
  ideaId: idea._id,
  message: "Каким образом вы думаете зарабатывать?"
});
Comment.upsert({userId: uid, ideaId: idea._id}, {
  userId: uid,
  ideaId: idea._id,
  message: "We did not think about it."
});
Comment.upsert({userId: user3._id, ideaId: idea._id}, {
  userId: user3._id,
  ideaId: idea._id,
  message: "А мышей ловить с помощью вашего продукта можно будет?"
});
Comment.upsert({userId: user4._id, ideaId: idea._id}, {
  userId: user4._id,
  ideaId: idea._id,
  message: "Какой-то странный у вас продукт"
});
Comment.upsert({userId: user1._id, ideaId: idea._id}, {
  userId: user1._id,
  ideaId: idea._id,
  message: "Я хотел бы у вас работать. Как можно присоединиться?"
});

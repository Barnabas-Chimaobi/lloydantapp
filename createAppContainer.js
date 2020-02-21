import {createAppContainer} from 'react-navigation';
import {
  createStackNavigator,
  CreatDrawerNavigator,
} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import Landingdex from './src/components/Landing/landingdex';
import StudentLogin from './src/components/Landing/studentLogin';
import StaffLogin from './src/components/Landing/staffLogin';
import StudentContainer from './src/components/StudentContainer/studentContainer';
import HostelRequest from './src/components/Hostels/hostelRequest';
import SchoolFeesInvoice from './src/components/Fees/SchoolFees/schoolFeesInvoice';
import CourseRegistration from './src/components/CourseRegistration/courseRegistration';
import CheckResult from './src/components/results/checkResults';
import AllPayment from './src/components/Receipts/allPayment';
import ChangePassword from './src/components/changepassword/changePassword';
import PaySchoolFees from './src/components/Fees/SchoolFees/paySchoolFees';
import HostelStatus from './src/components/Hostels/hostelStatus';
import Null from './null';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: Landingdex,
      navigationOptions: {
        drawerLockMode: 'locked-closed',
        headerShown: 'false',
      },
    },
    StudentContainer: {
      screen: StudentContainer,
      navigationOptions: {
        headerShown: 'false',
        drawerLabel: Null,
      },
    },
    Password: {
      screen: ChangePassword,
      navigationOptions: {
        drawerLockMode: 'locked-closed',
        headerShown: 'false',
      },
    },
    Invoice: {
      screen: SchoolFeesInvoice,
      navigationOptions: {
        headerShown: 'false',
      },
    },
    Fees: {
      screen: AllPayment,
      navigationOption: {
        headerShown: 'false',
      },
    },
    PaySchoolFees: {
      screen: PaySchoolFees,
      navigationOptions: {
        headerShown: 'false',
      },
    },
    CourseRegistration: {
      screen: CourseRegistration,
      navigationOptions: {
        headerShown: 'false',
      },
    },
    RequestHostel: {
      screen: HostelRequest,
      navigationOptions: {
        headerShown: 'false',
      },
    },
    HostelStatus: {
      screen: HostelStatus,
      navigationOptions: {
        headerShown: 'false',
      },
    },
    // Profile: {
    //   // screen: Profile,
    //   navigationOptions:{
    //   headerShown: "false",
    //   }
    // },
    StaffLogin: {
      screen: StaffLogin,
      navigationOptions: {
        drawerLockMode: 'locked-closed',
        headerShown: 'false',
        drawerLabel: Null,
      },
    },
    StudentLogin: {
      screen: StudentLogin,
      navigationOptions: {
        drawerLockMode: 'locked-closed',
        headerShown: 'false',
        drawerLabel: Null,
      },
    },
    Results: {
      screen: CheckResult,
      navigationOptions: {
        headerShown: 'false',
      },
    },
  },

  {
    drawerBackgroundColor: '#ffa94d',
    headerShown: true,
  },
);
// const AppStack = StackNavigator({ RootStack : { screen: RootStack } });

export default createAppContainer(MyDrawerNavigator);

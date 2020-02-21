/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
// import Invoice from "./src/components/Invoice"
// import Invoice1 from "./src/components/Invoice1"
import StudentLogin from "./src/components/Landing/studentLogin"
import createAppContainer from "./createAppContainer"
import HostelRequest from "./src/components/Hostels/hostelRequest"
import HostelStatus from "./src/components/Hostels/hostelStatus"
import SchoolFeesInvoice from "./src/components/Fees/SchoolFees/schoolFeesInvoice"
import CourseRegistration from "./src/components/CourseRegistration/courseRegistration"
import PaySchooFees from "./src/components/Fees/SchoolFees/paySchoolFees"
import AllPayment from "./src/components/Receipts/allPayment"
import CheckResult from "./src/components/results/checkResults"
import ChangePassword from "./src/components/changepassword/changePassword"
import StaffLogin from "./src/components/Landing/staffLogin"
AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(createAppContainer));

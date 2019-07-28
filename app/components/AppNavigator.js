import { createStackNavigator, createAppContainer } from "react-navigation";
import ScreenPrincipal from "./ScreenPrincipal";
import Login from "./Login";
import Register from "./Register";
import DashboardHome from "./DashboardHome";

const AppNavigator = createStackNavigator({
    Home: ScreenPrincipal,
    Register: Register,
    Login: Login,
    DashboardHome: DashboardHome,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        elevation: 0,
      },
    }
  }
);

export default createAppContainer(AppNavigator);

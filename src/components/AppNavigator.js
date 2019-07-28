import { createStackNavigator, createAppContainer } from "react-navigation";
import ScreenPrincipal from "../screens/ScreenPrincipal";
import Register from "../screens/Register";
import Login from "../screens/Login";
import DashboardHome from "../screens/DashboardHome";

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

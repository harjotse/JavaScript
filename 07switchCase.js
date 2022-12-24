// switch case 
var userType="admin"
switch(userType)
{
    case "admin":
        console.log("Full access")
        break;
        case "sub admin ":
            console.log("some access")
            break;
            case "dbManager ":
                console.log("DB access")
                break;
                case "NetworkAdmini ":
                    console.log("Server access")
                    break;
                    case "endUSer ":
                        console.log("only acc access")
                        break;
                        default:
                            console.log("getLost no acess at all idiot lol")
}
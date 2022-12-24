var authenticated=false

// two ways for printing 

//1st way 
if(authenticated)
{
    console.log("signOut button")

}
else
{
    console.log("signIn button")
}

//2nd way
authenticated ? console.log("signOut button") : console.log("signIn button");
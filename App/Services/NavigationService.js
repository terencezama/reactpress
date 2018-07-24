export default (routeName, routes,nav) => {
    console.log('founx',routeName,routes,nav)
    for (const route of routes) {
        if (route.routeName == routeName) {
            nav.navigate(route);
            console.log("found xxxx")
            return;
        }
    }
    nav.navigate(routeName);
}
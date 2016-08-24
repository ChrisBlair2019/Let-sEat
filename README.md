Hack for the HackGeorgeTown Hackathon
Developers: Chris Blair, Nima Yahyazade, Nelson Lam, and David Gwizdala
I worked on the backend comprised of MongoDB to store user information and node.js to interact with it
The project was focus on the idea of many friends wanting to meet up with specific preferences with dietary
restrictions, using yelp, google, and facebook apis to blend group building, preference checking, and location
finding into one package. The apis were used to gather singular pieces of info to build the profile, the facebook login was 
used to build the friend group and get location, the locations were then plotted on a map and a center of mass equations was 
computed and a circle was build that would gather the data within the circle of restaurants which would then be checked for 
preference checking and dietary restriction using the yelp api. From this a restaurant that meets as many preferences as possible 
will be picked that is as equidistant from all people as possible, if no restaurant is selected then the circle will grow larger 
and will dynamically filtered preferences only, whilst keeping dietary restrictions until a restaurant list is found with the first 
being the closetest and fits as many preferences as possible.

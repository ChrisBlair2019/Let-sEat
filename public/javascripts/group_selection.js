var friendsArray = [];
var friendCount = 0;

function User (firstName, lastName){
	this.firstName = firstName;
	this.lastName = lastName;
	this.foodPreference = "Chinese";
}

function addNewFriend(friend)
{
	friendsArray.add(friend);
}

function updateFriends()
{
	for(i = 0 ; i < friendsArray.size; i++)
	{
		addNewFriend(friendsArray[i]);
	}
}
function deepCloneFriend(friend)
{
	var btn = document.getElementById("container");

	var friendsDiv = document.createElement("div");
	friendsDiv.style.width = "50%";
	friendsDiv.style.margin = "auto";
	friendsDiv.style.border = "4px solid";
	friendsDiv.style.position = "relative";
	friendsDiv.style.height = "150px";
	friendsDiv.style.borderRadius = "10px";
	friendsDiv.style.fontFamily = "Roboto, sans-serif, light";
	if (friendCount % 2 == 0)
	{
		friendsDiv.style.background = "#B3E5FC";
		friendsDiv.style.borderColor = "#0288D1";
	}
	else
	{
		friendsDiv.style.background = "";
		friendsDiv.style.borderColor = "";
	}

	var img = new Image();
	img.src = "images/trump.jpg";
	img.style.float = "left";
	img.style.width = "150px";
	img.style.height = "150px";
	img.style.left = "0px";

	var friendsInfoDiv = document.createElement("div");
	friendsInfoDiv.style.float = "right";
	friendsInfoDiv.style.width = "55%";

	var fullName = document.createTextNode(friend.firstName + " " + friend.lastName);
	var friendFoodPreference = document.createTextNode(friend.foodPreference);
	var friendFoodPreferenceStr = 'FriendFoodPreference' + friendCount;
	friendFoodPreference.id = friendFoodPreferenceStr;
	friendsInfoDiv.appendChild(fullName);
	friendsInfoDiv.appendChild(friendFoodPreference);
	friendsInfoDiv.style.fontSize = "24px";


	friendsDiv.appendChild(img);
	friendsDiv.appendChild(friendsInfoDiv);
	btn.parentNode.insertBefore(friendsDiv, btn);
}

window.onload = function updatePageWithNewFriend()
{
	var wholeDiv = document.getElementsByClassName('friendsDiv')[0];
	var div = wholeDiv;
	for (i = 0; i < 6; i++)
	{
		var trump = new User("Trump", "Donald");
		deepCloneFriend(trump);
		friendCount++;
	}

	var dropDown = document.getElementById("select");
	var dropDownSelected = dropDown.options[dropDown.selectedIndex].value;
	document.getElementById("submitBtn").addEventListener("click", function(){
	document.getElementById("FriendFoodPreference0").value = dropDownSelected});

}

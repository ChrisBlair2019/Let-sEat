
//creates information based off of user data
function createUserInformation() {

  var text = '{' +
              '"firstname":"' + '","lastname":"' + '",' +
              '"lat":"' + '", "long":"' + '",'
              '"preference":"'
              +'}';

  var userObj = JSON.parse(text);
  return userObj;
}

function sendUserInformation(var data) {
  xhr = new XMLHttpRequest();
  var url = "http://10.129.225.184:3000";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var json = JSON.parse(xhr.responseText);
      }
  }

  xhr.send(JSON.stringify(data));
}

function createGroupInformation(int groupSize) {

  var text = '{"title":' + titleString + ',';

  text = text + '{"firstName":"' + '","lastName":"' + '" }]}';

   var groupObj = JSON.parse(text);
   return groupObj;
}

function sendGroupInformation(var data) {
  xhr = new XMLHttpRequest();
  var url = "http://10.129.225.184:3000/users/host";
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var json = JSON.parse(xhr.responseText);
      }
  }

  xhr.send(JSON.stringify(data));
}
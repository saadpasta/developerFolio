//function to check whether the url is correct

function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

//function to check the missing values in different objects

function checkMissingValuesObj(obj, name, section, parentObjName = null) {
  for (let item in obj) {
    if (!obj[item]) {
      if (!parentObjName)
        console.log(
          `the value of ${item} in ${
            name === null ? item : name
          }  in section : ${section} is  missing`
        );
      else
        console.log(
          `the value of ${item} in ${
            name === null ? item : name
          } in ${parentObjName} in section :${section} is missing `
        );
    }
  }
}

//function to check the missing values in an array of different objects

function checkMissingValuesBlog(arr, name) {
  arr.map(indObj => {
    for (let elem in indObj) {
      if (!indObj[elem])
        console.log(`the value of ${elem} in ${indObj.title} is missing`);
    }
    return null;
  });
}

export {isValidHttpUrl, checkMissingValuesObj, checkMissingValuesBlog};

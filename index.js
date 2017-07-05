/**
 * Created by Jonathan Meguira on 13/06/2017
 */

// checking that there is an arg
if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs')
var filename = process.argv[2];
fileBuffer =  fs.readFileSync(filename);
to_string = fileBuffer.toString();
splitted_contacts = to_string.split("\n");

fs.readFile(filename, 'utf8', function (err, data) {
    if (err) throw err;

    var contacts = [];

    for (i in splitted_contacts){
       contacts.push(splitted_contacts[i]);
   }

    var newArrayOfContacts = [];
    for (c in contacts) {
        var contactObject = {};
        var splittedBySemiColon = contacts[c].split(";");
        // this is now a 2 dimensional Array
        newArrayOfContacts.push(splittedBySemiColon);
   }
// mapping
    finalArrayOfContacts = [];


   for (var z = 0; z<newArrayOfContacts.length; z++){
       var contactObject = {};
       contactObject['customer_id'] = newArrayOfContacts[z][0];
       contactObject['family_name'] = newArrayOfContacts[z][1];
       contactObject['first_name'] = newArrayOfContacts[z][2];
       contactObject['street'] = newArrayOfContacts[z][3];
       contactObject['5th'] = newArrayOfContacts[z][4];
       contactObject['6th'] = newArrayOfContacts[z][5];
       contactObject['zip_code'] = newArrayOfContacts[z][6];
       contactObject['city'] = newArrayOfContacts[z][7];
       contactObject['dob'] = newArrayOfContacts[z][8];
       contactObject['phone'] = newArrayOfContacts[z][9];
       contactObject['11th'] = newArrayOfContacts[z][10];
       finalArrayOfContacts.push(contactObject);
   }


    var contactSheet = fs.createWriteStream("contacts.xls");
    var header = "Customer ID" + "\t" + "Family Name" + "\t" + "First Name" + "\t" +"??"+"\t"+ "Street" + "\t" + "5th" + "\t" + "6th" + "\t" + "Zip Code" + "\t" + "city" + "\t" + "DOB" + "\t" + "Phone" +"\t"+"11th" +"\n";
    contactSheet.write(header);
    // creating a new instance with a shorter name
    var arr = finalArrayOfContacts;
    for (y in arr){
        var row = arr[y]['customer_id'] + "\t" + arr[y]['family_name'] + "\t"
            + arr[y]['first_name'] + "\t" + arr[y]['street'] + "\t" +
            arr[y]['5th'] + "\t" + arr[y]['6th'] + "\t" + arr[y]['zip_code'] +
            "\t" + arr[y]['city'] + "\t" + arr[y]['dob'] + "\t" + arr[y]['phone'] +"\t"+arr[y]['11th'] +"\n";
        console.log(row);
        contactSheet.write(row);
    }
   // contactSheet.close();

});
1. Include `axios` to your `index.html`. Make sure to include the script `<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.7.2/axios.js" integrity="sha512-vHNHepeQWwAggJlhEk932jRS5sNdn/Nn4F+w4TpXW5dA+04qnd3e7YpfXo6auWhFG6z3FVhmScG4ovtF+qYeZw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>` in your `index.html`.

2. Add in a button which when you click on it, it will load the following JSON: `https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/sample-json-2.json`

3. Display **only** the first name, last name and the different parts of address in `<body>` when the button is pressed. Your output should look something like this:

____
<ul>
  <li>First Name: Rack</li>
  <li>Last Name: Jackon</li>
  <li>Street Address: 126</li>
  <li>City: San Jone</li>
  <li>State: CA</li>
  <li>Postal Code: 394221</li>
</ul>

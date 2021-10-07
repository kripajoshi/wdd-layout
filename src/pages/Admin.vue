<template>
    
    <div> 
     <h1 class="admin">
      Welcome Administrator!
    </h1>
    <div class="text-b">
        <h2> Here are our Interns!</h2>
        <table id="interns">
            <tr>
                <th>USER ID </th>
                <th> NAME </th>
                <th> PHOTO</th>
                <th> ABOUT</th>
                <th> LINK TO PORTFOLIO </th>
                <th> ACTIONS </th>
                
                </tr>
                <tr>
                    <td>1 </td>
                    <td> TEST </td>
                    <td> UPLOAD </td>
                    <td> Lorem Ipsum </td>
                    <td> www.example.com </td>
                    <td> EDIT/DELETE </td>
                </tr>
                 <tr>
                    <td>2 </td>
                    <td> TEST 2</td>
                    <td> UPLOAD </td>
                    <td> Lorem Ipsum </td>
                    <td> www.example.com </td>
                    <td> EDIT/DELETE </td>
                </tr>
                 <tr>
                    <td>3 </td>
                    <td> TEST 3 </td>
                    <td> UPLOAD </td>
                    <td> Lorem Ipsum </td>
                    <td> www.example.com </td>
                    <td> EDIT/DELETE </td>
                </tr>
                 <tr>
                    <td>4 </td>
                    <td> TEST 4</td>
                    <td> UPLOAD </td>
                    <td> Lorem Ipsum </td>
                    <td> www.example.com </td>
                    <td> EDIT/DELETE </td>
                </tr>
        </table>
    </div>

    </div>
</template>

<script setup lang="ts">

</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#interns {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#interns td, #interns th {
  border: 2px solid #ddd;
  padding: 8px;
}

#inters tr:nth-child(even){background-color:lightslategrey;}

#interns tr:hover {background-color: #ddd;}

#interns th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color:steelblue;
  color: white;
}
</style>

# Bangladesh Bank List

Bank list of those who operate their service in Bangladesh

#### [Live website](https://khyrulalam.github.io/BD-Bank-List/)

#### You can use this endpoint [Server](https://sheltered-peak-03802.herokuapp.com/api/banklist)

<table>
	<thead>
		<tr>
			<th>Resource</th>
			<th>HTTP Method</th>
			<th>Operation</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>/api/banklist</th>
			<td>GET</td>
			<td>Returns an array of Bank List</td>
		</tr>
		<tr>
			<td>/api/banklist??BankName=ebl</th>
			<td>GET</td>
			<td>Returns find an array of Bank List</td>
		</tr>
	</tbody>
</table>

#### Response Example

```json
[
  {
    "BankName": "Eastern Bank Ltd.",
    "BankShortCode": "EBL",
    "Type": "Private Commercial Banks",
    "Founded": "August 8, 1992",
    "Headquarters": "Dhaka, Bangladesh",
    "Website": "ebl.com.bd"
  }
]
```


#### Information credit [wikipedia](https://en.wikipedia.org/wiki/List_of_banks_in_Bangladesh)

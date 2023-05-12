var tickets = document.getElementById("ticketLabel");
var dinings = document.getElementById("diningLabel");
var hotels = document.getElementById("hotelLabel");

var ticket_div = document.getElementById("menu_ticket");
var dining_div = document.getElementById("menu_dinings");
var hotel_div = document.getElementById("menu_hotel");


function header_colors(color1, color2, color3) {
	tickets.style.backgroundColor = color1;
	dinings.style.backgroundColor = color2;
	hotels.style.backgroundColor = color3;
}

function initialize(){
	ticket_div.style.display = "block";
	dining_div.style.display = "none";
	hotel_div.style.display = "none";

	header_colors("white", "gray", "gray");
}

initialize();

tickets.onclick = function (){
	ticket_div.style.display = "block";
	dining_div.style.display = "none";
	hotel_div.style.display = "none";

	header_colors("white", "gray", "gray");
}

dinings.onclick = function (){
	ticket_div.style.display = "none";
	dining_div.style.display = "block";
	hotel_div.style.display = "none";

	header_colors("gray", "white", "gray");
}

hotels.onclick = function (){
	ticket_div.style.display = "none";
	dining_div.style.display = "none";
	hotel_div.style.display = "block";

	header_colors("gray", "gray", "white");
}

// Setup the event listeners for all the add buttons of all types, ticket, dinner and hotels
var inputs = document.getElementsByTagName('button');

for(var i=0;i < inputs.length; i++){
 if(inputs[i] != undefined && inputs[i].getAttribute('type') == 'button'){
	inputs[i].addEventListener("click" ,onAddButton);
 }
}

function onAddButton()
{
	var clicked_buttonid_element = document.getElementById(this.id);
	var clicked_buttonid_element_name = clicked_buttonid_element.form[0].name

	var input_quantity = document.getElementById(clicked_buttonid_element_name).value;

	if(Number(input_quantity) > 0 && input_quantity != "")
	{
		var clicked_buttonid_element_form_id = clicked_buttonid_element.form.id
		var selected_form = document.getElementById(clicked_buttonid_element_form_id)
		var alt = selected_form.firstElementChild.alt
		recalculate_total_quantity(input_quantity);

		// Insert a row and setup the content
		var order_table = document.getElementById("table_order");
		var tbodyRef = order_table.getElementsByTagName('tbody')[0]
		var order_row = tbodyRef.insertRow();
		order_row .insertCell(0).innerHTML = alt
		order_row .insertCell(1).innerHTML = input_quantity
	}
}

function deduct_quantity_from_total(quantity) {
	recalculate_total_quantity(-1*quantity);
}

function recalculate_total_quantity(quantity) {

	total_quantity_number = Number(document.getElementById("totalqty").innerText)

	document.getElementById("totalqty").innerText = total_quantity_number + Number(quantity);
}

function undo_last_item() {

	//var order_table = document.getElementById("table_order");
	var order_table = document.getElementById("table_order");
	var tbodyRef = order_table.getElementsByTagName('tbody')[0]

	if (tbodyRef.rows.length > 0)
	{
		// get the last row deducted
		last_row_quantity = Number(tbodyRef.rows[tbodyRef.rows.length-1].cells[1].innerHTML);
		deduct_quantity_from_total(last_row_quantity);

		tbodyRef.deleteRow(tbodyRef.rows.length-1);
	
	
	}
}
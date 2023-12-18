// List of functions to display operators
function    ft_bt_operator_div()
{
    let span = ft_create_span()
    ft_init_span(span, "/")
    ft_display_span(span)  
}

function    ft_bt_operator_mult()
{
    let span = ft_create_span()
    ft_init_span(span, "*")
    ft_display_span(span)
    
}

function    ft_bt_operator_plus()
{
    let span = ft_create_span()
    ft_init_span(span, "+")
    ft_display_span(span) 
}

function    ft_bt_operator_minus()
{
    let span = ft_create_span()
    ft_init_span(span, "-")
    ft_display_span(span)
}

// Function for rate button
function    ft_bt_rate()
{
    ft_message()
}

// Function to display dot
function    ft_bt_dot()
{
    ft_message()
}
    
// Function to clear the monitor of the calculator
function    ft_bt_clear()
{
    ft_selcet_id("display").innerHTML = null
}

// Function for delete the last input
function    ft_bt_del()
{
    let last_child = ft_selcet_id("display").lastChild
    if (isNaN(last_child))
    {
        ft_selcet_id("display").removeChild(last_child)
    }
}

// Select operators
let bt_operator_div = ft_selcet_id("bt_operator_div")
let bt_operator_mult = ft_selcet_id("bt_operator_mult")
let bt_operator_plus = ft_selcet_id("bt_operator_plus")
let bt_operator_minus = ft_selcet_id("bt_operator_minus")

// Add click event
ft_add_event(bt_operator_div, "click", ft_bt_operator_div)
ft_add_event(bt_operator_mult, "click", ft_bt_operator_mult)
ft_add_event(bt_operator_plus, "click", ft_bt_operator_plus)
ft_add_event(bt_operator_minus, "click", ft_bt_operator_minus)

// Select rate and dot button
let bt_rate = ft_selcet_id("bt_rate")
let bt_dot = ft_selcet_id("bt_dot")

// Add click event to rate and dot button
ft_add_event(bt_rate, "click", ft_bt_rate)
ft_add_event(bt_dot, "click", ft_bt_dot)

// Select clear and delete button
let bt_clear = ft_selcet_id("bt_clear")
let bt_del = ft_selcet_id("bt_del")

// Add click event to clear and delete button
ft_add_event(bt_clear, "click", ft_bt_clear)
ft_add_event(bt_del, "click", ft_bt_del)
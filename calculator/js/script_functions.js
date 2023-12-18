// Function to select one HTML element by its id
function    ft_selcet_id(id)
{
    return document.getElementById(id)
}

// Function to create a span HTML element
function    ft_create_span()
{
    return document.createElement("span")
}

// Function to put value in an HTML element, need to specify element tag name and the value to put in.
function    ft_init_span(span, value)
{
    span.textContent = value
}

// Function to create an event, need to specify first the taget, after the type of the event, and the name of the function to run
function    ft_add_event(bt, event, ft)
{
    bt.addEventListener(event, ft)
}

// Function to print to monitor the span element and its value
function    ft_display_span(span)
{
    ft_selcet_id("display").appendChild(span)
}

// Function that show a message
function    ft_message()
{
    alert("This button won't be available until the next update")
}


function   ft_detect_first_op(expression)
{
    let tab = ""
    if (ft_selcet_id("display").children[0].innerHTML === "-")
    {
        return tab += "+" + expression
    }
    else
    {
        return ("+" + expression)
    }
}

function ft_detect_op_minus(expression)
{
    let tab = ""
    let flag = false
    for (let i = 0; i < expression.length; i++)
    {
        if (i > 1 && expression[i] === "-")
        {
            flag = true
            for (let j = 0; j < i; j++)
            {
                tab += expression[j]
            }
            tab += "+-"
            for (let j = i + 1; j < expression.length; j++)
            {
                tab += expression[j]
            }
        }
    }
    if(flag)
    {
        return (tab)
    }
    else
    {
        return (expression)
    }
}

function    ft_detect_nb_op(expression)
{
    let     nb_op = 0
    for (let i = 0; i < expression.length; i++)
    {
        if (expression[i] === "+" || expression[i] === "*" || expression[i] === "/")
        {
            nb_op++
        }
    }
    return (nb_op)
}

function    ft_ordered_list_op(expression)
{
    let tab = []
    let j = 0
    for (let i = 0; i < expression.length; i++)
    {
        if (expression[i] === "+" || expression[i] === "*" || expression[i] === "/")
        {
            tab[j] = expression[i]
            j++
        }
    }
    return (tab)
}

function    ft_detect_and_merge_digit_to_value_after_op(expression, nb_op)
{
    let tab = []
    for (let i = 0; i < nb_op; i++)
    {
        tab[i] = ""
    }
    let j = 0
    for (let i = 0; i < expression.length; i++)
    {
        if (expression[i] !== "+" && expression[i] !== "*" && expression[i] !== "/")
        {
            tab[j] += expression[i]
        }
        else if (i > 0 && expression[i] !== "+" || i > 0 &&  expression[i] !== "*" || i > 0 &&  expression[i] !== "/")
        {
            j++
        }
    }
    return (tab)
}

function    ft_merged_digit_list_type_number(merged_digit_list)
{
    for (let i = 0; i < merged_digit_list.length; i++)
    {
        merged_digit_list[i] = parseFloat(merged_digit_list[i])
    }
    return (merged_digit_list)
}

function    ft_solve_div(ordered_list_op, merged_digit_list_type_number)
{
    let result
    for (let i = 0; i < merged_digit_list_type_number.length; i++)
    {
        if (ordered_list_op[i] === "/")
        {
            result = merged_digit_list_type_number[i - 1] / merged_digit_list_type_number[i]
            let temp = []
            let temp2 = []
            for (let j = 0; j < i - 1; j++)
            {
                temp[j] = merged_digit_list_type_number[j]
            }
            temp[i - 1] = result
            for (j = i; j < merged_digit_list_type_number.length - 1; j++)
            {
                temp[j] = merged_digit_list_type_number[j + 1]
            }
            merged_digit_list_type_number = null
            merged_digit_list_type_number = temp
            
            for (let j = 0; j < i; j++)
            {
                temp2[j] = ordered_list_op[j]
            }
            for (let j = i; j < ordered_list_op.length - 1; j++)
            {
                temp2[j] = ordered_list_op[j + 1]
            }
            ordered_list_op = null
            ordered_list_op = temp2
        }
    }
    ft_solve_mult(ordered_list_op, merged_digit_list_type_number)
}

function    ft_solve_mult(ordered_list_op, merged_digit_list_type_number)
{
    let result
    for (let i = 0; i < merged_digit_list_type_number.length; i++)
    {
        if (ordered_list_op[i] === "*")
        {
            result = merged_digit_list_type_number[i - 1] * merged_digit_list_type_number[i]
            let temp = []
            let temp2 = []
            for (let j = 0; j < i - 1; j++)
            {
                temp[j] = merged_digit_list_type_number[j]
            }
            temp[i - 1] = result
            for (let j = i; j < merged_digit_list_type_number.length - 1; j++)
            {
                temp[j] = merged_digit_list_type_number[j + 1]
            }
            merged_digit_list_type_number = null
            merged_digit_list_type_number = temp
            
            for (let j = 0; j < i; j++)
            {
                temp2[j] = ordered_list_op[j]
            }
            for (let j = i; j < ordered_list_op.length - 1; j++)
            {
                temp2[j] = ordered_list_op[j + 1]
            }
            ordered_list_op = null
            ordered_list_op = temp2
            (ordered_list_op)
        }
        ft_solve_plus(ordered_list_op, merged_digit_list_type_number)
    }
}

function    ft_solve_plus(ordered_list_op, merged_digit_list_type_number)
{
    let result
    for (let i = 0; i < merged_digit_list_type_number.length; i++)
    {
        if (i > 0 && ordered_list_op[i] === "+")
        {
            result = merged_digit_list_type_number[i - 1] + merged_digit_list_type_number[i]
            let temp = []
            let temp2 = []
            for (let j = 0; j < i - 1; j++)
            {
                temp[j] = merged_digit_list_type_number[j]
            }
            temp[i - 1] = result
            for (let j = i; j < merged_digit_list_type_number.length - 1; j++)
            {
                temp[j] = merged_digit_list_type_number[j + 1]
            }
            merged_digit_list_type_number = null
            merged_digit_list_type_number = temp
            
            for (let j = 0; j < i; j++)
            {
                temp2[j] = ordered_list_op[j]
            }
            for (let j = i; j < ordered_list_op.length - 1; j++)
            {
                temp2[j] = ordered_list_op[j + 1]
            }
            ordered_list_op = null
            ordered_list_op = temp2
        }
    }
    result = merged_digit_list_type_number
    if (isNaN(result))
    {
        result = "Syntax Error"
        ft_selcet_id("display").innerHTML = null
        let span = ft_create_span("span")
        ft_init_span(span, result)
        ft_display_span(span)
    }
    else
    {
        ft_selcet_id("display").innerHTML = null
        let span = ft_create_span("span")
        ft_init_span(span, result)
        ft_display_span(span)
    }
}
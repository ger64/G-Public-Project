// Function to run when equal button is pressed
function    ft_operator_equal()
{
    let expression = ""
    for (let i = 0; i < ft_selcet_id("display").children.length; i++)
    {
        expression += ft_selcet_id("display").children[i].innerHTML
    }
    expression = ft_detect_first_op(expression)

    expression = ft_detect_op_minus(expression)

    nb_op = ft_detect_nb_op(expression)

    let ordered_list_op = ft_ordered_list_op(expression)

    let merged_digit_list = ft_detect_and_merge_digit_to_value_after_op(expression, nb_op)

    let merged_digit_list_type_number = ft_merged_digit_list_type_number(merged_digit_list)

    ft_solve_div(ordered_list_op, merged_digit_list_type_number)      
}

// Select equal button
let bt_operator_equal = ft_selcet_id("bt_operator_equal")

// Add click event to equal button
ft_add_event(bt_operator_equal, "click", ft_operator_equal)
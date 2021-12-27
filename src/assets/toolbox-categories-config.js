const options = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Control",
            "colour": "330",
            "contents": [
                {
                    "kind": "block",
                    "type": "controls_if"
                },
            ]
        },
        {
            "kind": "category",
            "name": "Logic",
            "colour": "210",
            "contents": [
                {
                    "kind": "block",
                    "type": "logic_compare"
                },
                {
                    "kind": "block",
                    "type": "logic_operation"
                },
                {
                    "kind": "block",
                    "type": "logic_boolean"
                },
                {
                    "kind": "block",
                    "type": "logic_negate"
                },
                {
                    "kind": "block",
                    "type": "logic_null"
                },
                {
                    "kind": "block",
                    "type": "logic_ternary"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Loops",
            "colour": "120",
            "contents": [
                {
                    "kind": "block",
                    "type": "controls_repeat_ext",
                    
                },
                {
                    "kind": "block",
                    "type": "controls_whileUntil"
                },
                {
                    "kind": "block",
                    "type": "controls_forEach"
                },
                {
                    "kind": "block",
                    "type": "controls_flow_statements"
                },
                
            ]
        },
        {
            "kind": "category",
            "name": "Math",
            "colour": "230",
            "contents": [
                {
                    "kind": "block",
                    "type": "math_number",
                },
                {
                    "kind": "block",
                    "type": "math_arithmetic",
                },
                {
                    "kind": "block",
                    "type": "math_single",
                },
                {
                    "kind": "block",
                    "type": "math_single",
                },
                {
                    "kind": "block",
                    "type": "math_trig",
                },
                {
                    "kind": "block",
                    "type": "math_constant",
                },
                {
                    "kind": "block",
                    "type": "math_number_property",
                },
                {
                    "kind": "block",
                    "type": "math_round",
                },
                {
                    "kind": "block",
                    "type": "math_on_list",
                },
                {
                    "kind": "block",
                    "type": "math_modulo",
                },
                {
                    "kind": "block",
                    "type": "math_constrain",
                },
                {
                    "kind": "block",
                    "type": "math_random_int",
                },
                {
                    "kind": "block",
                    "type": "math_random_float",
                },    
            ]
        },
        {
            "kind": "category",
            "name": "Text",
            "colour": "160",
            "contents": [
                {
                    "kind": "block",
                    "type": "text",
                },
                {
                    "kind": "block",
                    "type": "text_join",
                },
                {
                    "kind": "block",
                    "type": "text_append",
                },
                {
                    "kind": "block",
                    "type": "text_length",
                },
                {
                    "kind": "block",
                    "type": "text_isEmpty",
                },
                {
                    "kind": "block",
                    "type": "text_indexOf",
                },
                {
                    "kind": "block",
                    "type": "text_charAt",
                },
                {
                    "kind": "block",
                    "type": "text_getSubstring",
                },
                {
                    "kind": "block",
                    "type": "text_changeCase",
                },
                {
                    "kind": "block",
                    "type": "text_trim",
                },
                {
                    "kind": "block",
                    "type": "text_changeCase",
                },
                {
                    "kind": "block",
                    "type": "text_print"
                },
                {
                    "kind": "block",
                    "type": "text_prompt_ext"
                },
                

            ]
        },
        {
            "kind": "category",
            "name": "Lists",
            "colour": "260",
            "contents": [
                {
                    "kind": "block",
                    "type": "lists_create_with"
                },
                {
                    "kind": "block",
                    "type": "lists_repeat"
                },
                {
                    "kind": "block",
                    "type": "lists_length"
                },
                {
                    "kind": "block",
                    "type": "lists_isEmpty"
                },
                {
                    "kind": "block",
                    "type": "lists_indexOf"
                },
                {
                    "kind": "block",
                    "type": "lists_getIndex"
                },
                {
                    "kind": "block",
                    "type": "lists_setIndex"
                },
                {
                    "kind": "block",
                    "type": "lists_getSublist"
                },
                {
                    "kind": "block",
                    "type": "lists_split"
                },
                {
                    "kind": "block",
                    "type": "lists_sort"
                },
            ]
        },
        {
            "kind": "category",
            "name": "Colors",
            "colour": "20",
            "contents": [
                {
                    "kind": "block",
                    "type": "colour_picker"
                },
                {
                    "kind": "block",
                    "type": "colour_random"
                },
                {
                    "kind": "block",
                    "type": "colour_rgb"
                },
                {
                    "kind": "block",
                    "type": "colour_blend"
                },                
            ]
        },
        {
            "kind": "category",
            "name": "Variable",
            "colour": "330",
            "contents": [
                // Block for variable getter.
                {
                    "kind": "block",
                    "type": "variables_get",
                    "message0": "%1",
                    "args0": [
                        {   // Beginning of the field variable dropdown
                            "type": "field_variable",
                            "name": "VAR",    // Static name of the field
                            "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"    // Given at runtime
                        }   // End of the field variable dropdown
                    ],
                    "output": null, // Null means the return value can be of any type
                },
                // Block for variable setter.
                {
                    "kind": "block",
                    "type": "variables_set",
                    "message0": "%{BKY_VARIABLES_SET}",
                    "args0": [
                        {
                            "type": "field_variable",
                            "name": "VAR",
                            "variable": "%{BKY_VARIABLES_DEFAULT_NAME}"
                        },
                        {
                            "type": "input_value",    // This expects an input of any type
                            "name": "VALUE"
                        }
                    ],
                }
            ]
        },
        {
            "kind": "category",
            "name": "Procedure",
            "colour": "290",
        }
    ]
}

export default options;
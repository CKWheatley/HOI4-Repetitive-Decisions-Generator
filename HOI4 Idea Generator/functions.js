// Put the name of the ideas and decisions in here
let idea_name = `research_infrastructure_idea`
let dec_name = `${idea_name}_dec_`

let decision_no = 1
let idea_no = 1

let decision = `${dec_name}${decision_no}`
let idea = `${idea_name}_${decision_no}`



// This is your starting cost
let cost = 100;

function decision_generation(){
    $("body").html(`
    ${decision} = {                                                     <br>
		cost = ${cost}                                                  <br>
		fire_only_once = yes<span1>                                     <br>
		available = {                                                   <br>
			ai_will_do = 0                                              <br>
		}                                                               <br>
		complete_effect = {                                             <br>
			add_ideas = ${idea}                                         <br>
		}                                                               <br>
	}                                                                   <br>
    `)
}
function following_decisions_generation(){
    // The number between < & ; is the number of decisions you want to create.
    for(i = 1; i < 20; i++){
        decision_no = decision_no + 1;
        decision = `${dec_name}${decision_no}`
        idea = `${idea_name}_${decision_no}`
        // change the value below to change how much it will increase by every time your decision increases. You can change the plus to multiplication division etc as well.
        cost = cost + 100;


        var idea_prev = `${idea_name}_${decision_no - 1}`

        $("body").append(`
        ${decision} = {                                                 <br>
		    cost = ${cost}                                              <br>
		    fire_only_once = yes                                        <br>
            visible = {                                                 <br>
                has_idea = ${idea_prev}                                 <br>
            }                                                           <br>
		    available = {                                               <br>
		    	ai_will_do = 0                                          <br>
		    }                                                           <br>
		    complete_effect = {                                         <br>
                swap_ideas = {                                          <br>
                    remove_idea = ${idea_prev}                          <br>
                    add_idea = ${idea}                                  <br>
                }                                                       <br>
		    }                                                           <br>
	    }                                                               <br><br>
    `)
    }
}

function generate_decisions(){
    decision_generation();
    following_decisions_generation()
}



// Ideas Generation
/*
Below is used just for modifiers that get repetitive simply add your modifier then add the arguments and the increases then print to html for copying and pasting
*/ 


function generate_ideas(){

    // Modifier value
    let modifier_1_value = 0;
    let modifier_2_value = 0;
    let modifier_3_value = 0;
    let modifier_4_value = 0;
    let modifier_5_value = 0;
    let modifier_6_value = 0;
    let modifier_7_value = 0;
    let modifier_8_value = 0;
    let modifier_9_value = 0;
    let modifier_10_value = 0;
    let modifier_11_value = 0;
    let modifier_12_value = 0;
    let modifier_13_value = 0;
    let modifier_14_value = 0;
    let modifier_15_value = 0;

    for(i = 0; i < 20; i++){

        // This is where each time an idea is made the next one will have the previous ideas values but plus the values below
        // You can add standard plus values, percentage increases etc or complex maths to work this all out.

        // eg.
        /*
        modifier_1_value = modifier_1_value + 0.066
        OR
        modifier_1_value = modifier_1_value + 0.066 * 12 + 13 / 6
        */

        modifier_1_value = modifier_1_value + 0.066
        modifier_2_value = modifier_2_value + -0.04955
        modifier_3_value = modifier_3_value + -0.048
        modifier_4_value = modifier_4_value + 0.05
        modifier_5_value = modifier_5_value + 0.05
        modifier_6_value = modifier_6_value + 0.05

        modifier_7_value = modifier_7_value + 0.04
        modifier_8_value = modifier_8_value + 1
        modifier_9_value = modifier_9_value + -0.02
        modifier_10_value = modifier_10_value + -0.04
        modifier_11_value = modifier_11_value + 300
        modifier_12_value = modifier_12_value + -0.15
        modifier_13_value = modifier_13_value + 0.15


        // name of modifiers. please visit this page here for a list of all modifiers --https://hoi4.paradoxwikis.com/Modifiers-- 

        // change the part just after brackets and before the equals sign.
        let modifier_1 = `research_speed_factor = ${modifier_1_value}`
        let modifier_2 = `equipment_upgrade_xp_cost = ${modifier_2_value}`
        let modifier_3 = `air_fuel_consumption_factor = ${modifier_3_value}`
        let modifier_4 = `air_mission_efficiency = ${modifier_4_value}`
        let modifier_5 = `air_training_xp_gain_factor = ${modifier_5_value}`
        let modifier_6 = `experience_gain_air_factor = ${modifier_6_value}`

        let modifier_7 = `naval_detection = ${modifier_7_value}`
        let modifier_8 = `naval_invasion_capacity = ${modifier_8_value}`
        let modifier_9 = `navy_visibility = ${modifier_9_value}`
        let modifier_10 = `army_fuel_consumption_factor = ${modifier_10_value}`
        let modifier_11 = `weekly_manpower = ${modifier_11_value}`
        let modifier_12 = `propaganda_mission = ${modifier_12_value}`
        let modifier_13 = `root_out_resistance_effectiveness = ${modifier_13_value}`
        let modifier_14 = `political_power_gain = ${modifier_14_value}`
        let modifier_15 = `political_power_gain = ${modifier_15_value}`



        // THIS IS IMPORTANT!!

        // In order for the code to recognise what modifiers you want to include you must add ${modifier_modifiernumber}<br>

        /*
        eg.

        modifier = {<br>
            ${modifier_1}<br>
            ${modifier_2}<br>
        }<br>

        modifiers 1 and 2 will appear in the generation

        */
        $("body").append(`
    ${idea} = {<br>
        picture = reduce_xp_upgrade_cost-1<br>
        modifier = {<br>
            ${modifier_1}<br>
            ${modifier_2}<br>
        }<br>
    }<br>
`)
    idea_no = idea_no + 1
    idea = `${idea_name}_${idea_no}`
    }
}







// How does the generation work?

// Its simple, once you have changed everything you need to above you need the computer to generate the code. Simply remove the "//" comment tag before the code below.

// put this in the mods decisions folder
//generate_decisions()

//put this in the mods ideas folder
//generate_ideas()


//Save this document and run the index.html file in the same file as this

//once you pick the function you want run the .html file copy and paste all of the html document into the decisions or ideas folder in your hoi4 mod file.



// make sure you have included your new decisions and ideas in the category.txt file in hoi4. More about this can be found on hoi4 wiki.
// i will look to expand this further in the future simply so i can keep practising my coding so feedback is always great ;)
// Callum

/* 
    MC_UUID_COMPRESSOR.js by ItsBrian

    USAGE EXAMPLE - COMPRESS A UUID:
        compressUUID('20087ab8-e5e0-4b42-8155-fcc22d1cb189')
        compressUUID('069a79f444e94726a5befca90e38aaf5')

    USAGE EXAMPLE - DECOMPRESS A UUID:
        decompressUUID('ǝƝɷޚնձȌȧʶɎս߆ǆơޓʾ')          (RETURNS WITH DASHES)
        decompressUUID('ǝƝɷޚնձȌȧʶɎս߆ǆơޓʾ', true)    (RETURNS WITH DASHES)
        decompressUUID('ƛʿʚՂȩպȬǣ5ݼս9ſȉaՃ', false)   (RETURNS WITHOUT DASHES)
*/



UUID_COMPRESSION_DATA = {
    CUSTOM_CHARS: "abcdefghijklmnopqrstuvwxyz0123456789ખગઘݻݼݽݾݿހށނރބޅކއވމފދތލގޏސޑޒޓޔޕޖޗޘޙޚޛޜޝޞޟޠޡޢޣޤޥަާިީުޫެޭޮޯްޱ߀߁߂߃߄߅߆߇߈߉ߊߋߌߍߎߏߐߑߒߓߔߕߖߗߘߙߚߛߜߝߞߟߠߡߢߣߤߥߦߧߨߩߪ߲߫߬߭߮߯߰߱߳ߴߵ߶߷߸߹ߺ߻աբգդեզէըթժիլխծկհձղճմյնշոչպջռսվտրցւփքօֆևԱԲԳԴԵԶԷԸԹԺԻԼԽԾԿՀՁՂՃՄՅՆՇՈՉՊՋՌՍՎՏՐՑՒՓՔՕՖ՗՘ՙ՚՛՜՝՞՟ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώϏϐϑϒϓϔϕϖϗϘϙϚϛϜϝϞϟϠϡϢϣϤϥϦϧϨϩϪϫϬϭϮϯϰϱϲϳϴϵ϶ϷϸϹϺϻϼϽϾϿЀЁЂЃЄЅІЇЈЉЊЋЌЍЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюяѐёђѓєѕіїјљњћќѝўџѠѡѢѣѤѥѦѧѨѩѪѫѬѭѮѯѰѱѲѳѴѵѶѷѸѹѺѻѼѽѾѿҀҁ҂҃҄҅҆҇҈҉ҊҋҌҍҎҏҐґҒғҔҕҖҗҘҙҚқҜҝҞҟҠҡҢңҤҥҦҧҨҩҪҫҬҭҮүҰұҲҳҴҵҶҷҸҹҺһҼҽҾҿӀӁӂӃӄӅӆӇӈӉӊӋӌӍӎӏӐӑӒӓӔӕӖӗӘәӚӛӜӝӞӟӠӡӢӣӤӥӦӧӨөӪӫӬӭӮӯӰӱӲӳӴӵӶӷӸӹӺӻӼӽӾӿԀԁԂԃԄԅԆԇԈԉԊԋԌԍԎԏԐԑԒԓԔԕԖԗԘԙԚԛԜԝԞԟԠԡԢԣԤԥԦԧԨԩԪԫԬԭԮԯΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡͺͻͼͽ;Ϳ!#$%&'()*+,./:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`{|}~¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽžſƀƁƂƃƄƅƆƇƈƉƊƋƌƍƎƏƐƑƒƓƔƕƖƗƘƙƚƛƜƝƞƟƠơƢƣƤƥƦƧƨƩƪƫƬƭƮƯưƱƲƳƴƵƶƷƸƹƺƻƼƽƾƿǀǁǂǃǄǅǆǇǈǉǊǋǌǍǎǏǐǑǒǓǔǕǖǗǘǙǚǛǜǝǞǟǠǡǢǣǤǥǦǧǨǩǪǫǬǭǮǯǰǱǲǳǴǵǶǷǸǹǺǻǼǽǾǿȀȁȂȃȄȅȆȇȈȉȊȋȌȍȎȏȐȑȒȓȔȕȖȗȘșȚțȜȝȞȟȠȡȢȣȤȥȦȧȨȩȪȫȬȭȮȯȰȱȲȳȴȵȶȷȸȹȺȻȼȽȾȿɀɁɂɃɄɅɆɇɈɉɊɋɌɍɎɏɐɑɒɓɔɕɖɗɘəɚɛɜɝɞɟɠɡɢɣɤɥɦɧɨɩɪɫɬɭɮɯɰɱɲɳɴɵɶɷɸɹɺɻɼɽɾɿʀʁʂʃʄʅʆʇʈʉʊʋʌʍʎʏʐʑʒʓʔʕʖʗʘʙʚʛʜʝʞʟʠʡʢʣʤʥʦʧʨʩʪʫʬʭʮʯʰʱʲʳʴʵʶʷʸʹʺʻʼʽʾʿˀˁ˂˃˄˅ˆˇˈˉˊˋˌˍˎˏːˑ˒˓˔˕˖˗˘˙˚˛˜˝˞˟ˠˡˢˣˤ˥˦˧˨˩˪˫ˬ˭ˮ˯˰˱˲˳˴˵˶˷˸˹˺˻˼˽ͱͲͳʹ͵Ͷͷ",
    UUID_CHARS: "abcdefghijklmnopqrstuvwxyz0123456789"
}



// Example:    compressUUID('20087ab8-e5e0-4b42-8155-fcc22d1cb189')
// Example:    compressUUID('069a79f444e94726a5befca90e38aaf5')
const compressUUID = (UUID) => {

    // Remove dashes from given UUID
    let SHORT_UUID = UUID.replace(/-/gi, '')

    // Get the list of possible characters in a normal UUID
    let UUID_CHARS = UUID_COMPRESSION_DATA.UUID_CHARS

    // Get the list of possible characters in a compressed UUID
    let CUSTOM_CHARS = UUID_COMPRESSION_DATA.CUSTOM_CHARS

    // Get the amount of possible characters in a normal UUID
    let UUID_CHARS_LENGTH = UUID_COMPRESSION_DATA.UUID_CHARS.length;

    // Prepare compressed uuid variable
    let COMPRESSED_UUID = '';

    // Compress groups of 2 characters into 1
    for(let i=0; i<SHORT_UUID.length; i+=2){

        // Get the character indexes of the current two characters
        let FIRST_INDEX  = UUID_CHARS.indexOf(SHORT_UUID[i])
        let SECOND_INDEX = UUID_CHARS.indexOf(SHORT_UUID[i+1])

        // Multiply the first index by the amount of possible characters in a normal UUID (hard to explain why)
        FIRST_INDEX *= UUID_CHARS_LENGTH

        // Calculate the final index
        let CHAR_INDEX = FIRST_INDEX + SECOND_INDEX

        // Get the character with this index
        let CHAR = CUSTOM_CHARS[CHAR_INDEX]

        // Add the character to the compressed UUID
        COMPRESSED_UUID += CHAR
    }

    // Return the compressed UUID
    return COMPRESSED_UUID.toString()
}



// Example:     decompressUUID('ǝƝɷޚնձȌȧʶɎս߆ǆơޓʾ', true)        (RETURNS WITH DASHES)
// Example:     decompressUUID('ƛʿʚՂȩպȬǣ5ݼս9ſȉaՃ', false)       (RETURNS WITHOUT DASHES)
const decompressUUID = (COMPRESSED_UUID, INCLUDE_DASHES = true) => {

    // Prepare the decompressed UUID variable
    let DECOMPRESSED_UUID = ''

    // Loop over all the characters in the compressed UUID
    for (let i=0; i<COMPRESSED_UUID.length; i++){

        // Get the index of the character from the compressed UUID character list
        let CUSTOM_CHAR_INDEX = UUID_COMPRESSION_DATA.CUSTOM_CHARS.indexOf(COMPRESSED_UUID[i])

        // Get the amount of possible characters in a normal UUID
        let UUID_CHARS_LENGTH = UUID_COMPRESSION_DATA.UUID_CHARS.length

        // Get the list of possible characters in a normal UUID 
        let UUID_CHARS = UUID_COMPRESSION_DATA.UUID_CHARS

        // Get the index of the first and second UUID characters from the compressed character (hard to explain how)
        let  FIRST_INDEX = Math.floor(CUSTOM_CHAR_INDEX/UUID_CHARS_LENGTH)
        let SECOND_INDEX = CUSTOM_CHAR_INDEX % UUID_CHARS_LENGTH

        // Get the first and second character using their respective indexes
        let  FIRST_CHAR = UUID_CHARS[FIRST_INDEX]
        let SECOND_CHAR = UUID_CHARS[SECOND_INDEX]

        // Add both characters to the decompressed UUID
        DECOMPRESSED_UUID += FIRST_CHAR + SECOND_CHAR
    }

    // Add dashes if chosen to do so
    if (INCLUDE_DASHES == true){

        // List of the indexes of where the dashes are supposed to be
        let DASH_INDEXES = [8, 13, 18, 23]

        // Loop over the list of dash indexes
        for (let d in DASH_INDEXES)

            // Insert a dash at the right index
            DECOMPRESSED_UUID = DECOMPRESSED_UUID.slice(0, +DASH_INDEXES[d]) + "-" + DECOMPRESSED_UUID.slice(+DASH_INDEXES[d]);
    }

    // Return the decompressed UUID
    return DECOMPRESSED_UUID.toString()
}
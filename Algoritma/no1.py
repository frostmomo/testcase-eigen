def reverse_kalimat(word):
    alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    reversed_word = ''
    numbers = ''
    
    for char in word:
        if char.isdigit():
            numbers += char
        else:
            index = alphabet.index(char.upper())
            reversed_word = alphabet[index] + reversed_word

    return reversed_word + numbers

input_string = "negie2"
result = reverse_kalimat(input_string)
print(result)

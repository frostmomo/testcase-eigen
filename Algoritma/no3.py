def hitung_kata(input, output):
    word_count = [input.count(n) for n in output]
    return word_count

INPUT = ['xc', 'dz', 'bbb', 'dz']
QUERY = ['bbb', 'ac', 'dz']

output = hitung_kata(INPUT, QUERY)
print(output)

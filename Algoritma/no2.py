def kalimat_terpanjang(kalimat):
    kata = kalimat.split()
    hasil = max(kata, key=len)
    return hasil

sentence = "Saya sangat senang mengerjakan soal algoritma"
result = kalimat_terpanjang(sentence)
print(result)

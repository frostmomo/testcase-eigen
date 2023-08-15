def pengurangan_diagonal(matrix):
    n = len(matrix)
    diagonal_1 = sum(matrix[i][i] for i in range(n))
    diagonal_2 = sum(matrix[i][n - i - 1] for i in range(n))
    hasil = abs(diagonal_1 - diagonal_2)
    return hasil

Matrix = [
    [1, 2, 0], 
    [4, 5, 6], 
    [7, 8, 9]
    ]
result = pengurangan_diagonal(Matrix)
print(result)

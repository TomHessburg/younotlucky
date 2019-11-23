import math


def single_recieved_drop_chance(chance, num_killed):
    base_drop_chance = 1/chance

    calculated_drop_chance = 1 - (1 - base_drop_chance) ** num_killed

    print(f"drop chance: {round(calculated_drop_chance * 100, 2)}%")


single_recieved_drop_chance(128, 256)


"""
n === number of trials
x === number of successes, 
p === probability of success
q === probability of failure, aka 1 - p
"""


def multi_recieved_drop_chance(n, x, p, q):
    # left side of equation
    numerator = math.factorial(n)
    denomenator = math.factorial(n - x) * math.factorial(x)
    left = numerator/denomenator
    # middle
    middle = p ** x
    right_exponent = n-x

    # right
    right = q ** right_exponent

    # final answer
    final = left * middle * right
    print(
        f"The chance of you having recieved this outcome: {round(100 - ((1 - final) * 100), 4)}%")


multi_recieved_drop_chance(128, 4, 1/128, 1 - (1/128))

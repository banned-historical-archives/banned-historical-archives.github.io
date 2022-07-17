from LAC import LAC
import sys
lac = LAC()

with open(sys.argv[1]) as f:
    contents = f.read()

    if len(sys.argv) > 2:
        lac.load_customization(sys.argv[2], sep=None)

    custom_result = lac.run(contents)
    print(custom_result)

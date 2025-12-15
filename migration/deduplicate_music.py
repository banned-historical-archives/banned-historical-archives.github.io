import os
import re
import json5

current_dir = os.path.join(os.path.dirname(__file__), '..', 'config', 'archives6') 

# 2. 遍历当前目录下的所有项目，并筛选出目录
subdirectories = [
    item 
    for item in os.listdir(current_dir) 
    if item.endswith('.ts')
]

cfgs = {}
all_cfgs = []
for item in subdirectories:
    #print(item)

    content = None
    with open(os.path.join(current_dir, item), 'r', encoding='utf-8') as file:
        content = file.read()
        content = content.replace('export default','')
        content = re.sub(r'[; ]+$', '', content)

    j = json5.loads(content)
    all_cfgs.append(j)

all_cfgs.sort(key=lambda x: x['entity']['name'], reverse=True)
idx = 0
for j in all_cfgs:
    idx +=1
    name = j['entity']['name']
    cfgs.fromkeys
    if name in cfgs.keys():
        print(str(idx) + '/' + str(len(all_cfgs)))
        print(name)
        print(j)
        print(cfgs[name])
        # merge cfg
        a = cfgs[name]['entity']['lyrics'][0]['content']
        b = j['entity']['lyrics'][0]['content']
        cfgs[name]['entity']['lyrics'][0]['content'] = a if len(a) > len(b) else b
        for i in j['entity']['lyrics'][0]['audios']:
            cfgs[name]['entity']['lyrics'][0]['audios'].append(i)

        a_composers = cfgs[name]['entity']['composers']
        b_composers = j['entity']['composers']
        cfgs[name]['entity']['composers'] = a_composers if len(a_composers) > len(b_composers) else b_composers

        a_lyricists = cfgs[name]['entity']['lyrics'][0]['lyricists']
        b_lyricists = j['entity']['lyrics'][0]['lyricists']
        cfgs[name]['entity']['lyrics'][0]['lyricists'] = a_lyricists if len(a_lyricists) > len(b_lyricists) else b_lyricists

        print(
            'new_cfg')
        print(cfgs[name])

        os.remove(os.path.join(current_dir, j['entity']['id']+'.ts'))
        with open(os.path.join(current_dir, cfgs[name]['entity']['id']+
                               '.ts'), 'w', encoding='utf-8') as file:
            file.write('export default '+json5.dumps(cfgs[name],indent=4, ensure_ascii=False)+';')


        break
    cfgs[name] = j
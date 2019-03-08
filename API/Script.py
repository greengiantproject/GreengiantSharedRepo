import json
from time import sleep
import datetime
import random
from pip._vendor import requests

time_index = 0
time_interval = datetime.timedelta(minutes=1)
time_start = datetime.datetime.now()
time_next = time_start + time_index * time_interval

def sendrandom():
    a = (random.randint(0,3000) / 1000)
    url = '68.183.43.182:5984/cotwodb'
    payload = {"Date":"2019-03-08 10:48:59.613172","Rasp_Id":2,"Reading":a}
    headers = {'content-type': 'application/json'}
    response = requests.post(url, data=json.dumps(payload), headers=headers)
    print(response)

while True:
   time_now = datetime.datetime.now()
   if (time_now >= time_next):
       time_index += 1
       time_next = time_start + time_index * time_interval
       sendrandom()
   sleep(1)

# NodeJS_Homework_Chas4

Во посебниот фајл functions_module.js се напишани сите функции кои ќе се користат во мојот калкулатор. Истите тие функции се експортирани во фајлот index.js кадешто е напишан кодот за серверот кој води до мојот калкулатор за извршување на следните операции:
1. Претварање на милји во километри,
2. Претварање на степени Целзиусови во Фаренхајт,
3. Претварање lbs во килограми,
4. Претварање feets во метри,
5. Операција за множење на два броја,
6. Операција за делење на два броја.

Преку стартување на серверот http://localhost:10000/ со следниве примери на url може да го пресметаме резултатот на одредените операции:

http://localhost:10000/milestokm/10
- Добиваме резултат: `10 miles converted to km: 16 km.`

http://localhost:10000/celsiustofahrenheit/20
- Добиваме резултат: `20 Celisus converted to Fahrenheit is: 68 Fh.`

http://localhost:10000/lbstokg/100
- Добиваме резултат: `100 lbs converted to kg: 45.35 kg`

http://localhost:10000/feettometers/200
- Добиваме резултат: `200 Feet to meteres: 60.96`

http://localhost:10000/multiply/8/8
- Добиваме резултат: `8 multipled by 8 is: 64.`

http://localhost:10000/division/100/20
- Добиваме резултат: `100 divided by 20 is: 5`.
